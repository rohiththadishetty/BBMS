'use strict';


module.exports = function(ReceptionRequest) {
  ReceptionRequest.fulfill = async function(ctx, cb) {
    try {
      const bloodAmount = ctx.req.body.bloodAmount;
      const requestId = ctx.req.body.id;

      const BloodGroup = ReceptionRequest.app.models.BloodGroup;

      const receptionRequestInstance = await ReceptionRequest.findById(requestId);
      if (!receptionRequestInstance) {
        throw new Error('Reception request not found');
      }

      const bloodGroupInstance = await BloodGroup.findById(receptionRequestInstance.bloodGroupId);
      if (!bloodGroupInstance) {
        throw new Error('Blood group not found');
      }
      console.log(bloodGroupInstance.bloodAmount);
      if (bloodGroupInstance.bloodAmount < bloodAmount) {
        throw new Error('Insufficient blood amount in the blood group');
      }

      bloodGroupInstance.bloodAmount -= bloodAmount;
      await bloodGroupInstance.save();

      

      receptionRequestInstance.isDelivered = true;
      await receptionRequestInstance.save();

      return {
        message: 'Blood amount updated and reception request marked as received',
        bloodGroup: bloodGroupInstance,
        receptionRequest: receptionRequestInstance,
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  ReceptionRequest.remoteMethod('fulfill', {
    accepts: { arg: 'ctx', type: 'object', http: { source: 'context' } },
    returns: { arg: 'result', type: 'object' },
    http: { path: '/fulfill', verb: 'post' },
  });

  ReceptionRequest.observe('loaded', (ctx, next) => {
    const instance = ctx.data || ctx.instance;
    if (instance.isDelivered) instance.status = "DELIVERED";
    else if (instance.isAccepted) instance.status = "ACCEPTED";
    else if (instance.isCancelled) instance.status = "CANCELLED";
    else instance.status = "OPEN";
    // instance.test = true;
    next();
  });
  ReceptionRequest.accept = async function(ctx, cb) {
    try {
      const bloodAmount = ctx.req.body.bloodAmount;
      const bloodGroupId = ctx.req.body.bloodGroup?.id;
      const requestId = ctx.req.body.id;

      const BloodGroup = ReceptionRequest.app.models.BloodGroup;

      const bloodGroupInstance = await BloodGroup.findById(bloodGroupId);
      if (!bloodGroupInstance) {
        throw new Error('Blood group not found');
      }

      if (bloodGroupInstance.bloodAmount < bloodAmount) {
        throw new Error('Insufficient blood amount in the blood group');
      }

      const receptionRequestInstance = await ReceptionRequest.findById(requestId);
      if (!receptionRequestInstance) {
        throw new Error('Reception request not found');
      }

      receptionRequestInstance.isAccepted = true;
      await receptionRequestInstance.save();

      return {
        message: 'Reception request accepted',
        isAccepted: true,
        receptionRequest: receptionRequestInstance,
      };
    } catch (err) {
        throw new Error(err);
    }
  };

  ReceptionRequest.remoteMethod('accept', {
    accepts: { arg: 'ctx', type: 'object', http: { source: 'context' } },
    returns: { arg: 'result', type: 'object' },
    http: { path: '/accept', verb: 'post' },
  });
};
