'use strict';

module.exports = function(DonationRequest) {
  DonationRequest.remoteMethod('fulfill', {
    accepts: {arg: 'ctx', type: 'object', http: {source: 'context'}},
    returns: {arg: 'result', type: 'object'},
    http: {path: '/fulfill', verb: 'post'},
  });
  DonationRequest.fulfill = async function(ctx) {
    try {
      const bloodAmount = ctx.req.body.bloodAmount;
      const bloodGroupId = ctx.req.body.bloodGroupId || '644801064fb7c409e29413a4';
      const BloodGroup = DonationRequest.app.models.BloodGroup;

      const bloodGroupInstance = await BloodGroup.findById(bloodGroupId);
      if (!bloodGroupInstance) {
        throw new Error('Blood group not found');
      }

      bloodGroupInstance.bloodAmount = (bloodGroupInstance.bloodAmount || 0) + bloodAmount;
      await bloodGroupInstance.save();

      const donationRequestInstance = await DonationRequest.findById(ctx.req.body.id);
      if (!donationRequestInstance) {
        throw new Error('Donation request not found');
      }

      donationRequestInstance.isReceived = true;
      await donationRequestInstance.save();

      return {
        message: 'Blood amount updated and donation request marked as received',
        bloodGroup: bloodGroupInstance,
        donationRequest: donationRequestInstance,
      };
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  DonationRequest.observe('loaded', (ctx, next) => {
    const instance = ctx.data || ctx.instance;
    if (instance.isReceived) instance.status = "RECEIVED";
    else if (instance.isAccepted) instance.status = "ACCEPTED";
    else if (instance.isCancelled) instance.status = "CANCELLED";
    else instance.status = "OPEN";
    // instance.test = true;
    next();
  });
};
