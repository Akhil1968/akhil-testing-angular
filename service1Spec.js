describe('Unit: Message Model', function () {
    var messagesSvc;
    var techSvc;

    beforeEach(module('MyServiceApp'));
    //The syntax here with our service name wrapped in underscores, _MessageService_, 
    //is commonly used so we can assign our service to the local messages variable.
    beforeEach(inject(function (_MessageService_) {
        messagesSvc = _MessageService_;
    }));

    beforeEach(inject(function (_TechService_) {
        techSvc = _TechService_;
    }));

    it('Testing the MessageService', function() {
        var message = 'Test Message';
        messagesSvc.setMessage(message)
        expect(messagesSvc.getMessage()).toEqual(message);
    });

    it('Testing the TechService', function() {
        var aTech = {tech:'NodeJS', description: 'Runtime environment for JavaScript'};
        techSvc.setTech(aTech)
        expect(techSvc.getTech()).toEqual(aTech);
    });

});//describe
