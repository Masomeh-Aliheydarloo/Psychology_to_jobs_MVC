import { Router } from 'express';
import * as userController from '../controllers/userController';

export const router = Router();
//login 
router.post('/login', userController.login); 
router.post('/exam1', userController.checkexam1);
router.post('/exam2', userController.checkexam2);
router.post('/classexam', userController.checkclassexam);
router.post('/changepassword', userController.changepassword); 
router.post('/forgetpassword', userController.forgetpassword);
router.post('/resetpassword', userController.resetpassword);

//info
router.post('/info', userController.getUserInfo);
router.post('/editinfo', userController.updateUserInfo);

//signup
router.post('/signup', userController.signup);

//personality test
router.get('/personalitytest', userController.personalitytest);
router.post('/insertpersonalitytest', userController.insertpersonalitytest);
router.post('/personalitytestresult', userController.personalitytestresult);

//business test
router.get('/businesstest', userController.businesstest);
router.post('/insertbusinesstest', userController.insertbusinesstest);
router.post('/businesstestresult', userController.businesstestresult);

//class test
router.get('/classAtest', userController.classAtest); 
router.get('/classBtest', userController.classBtest);
router.get('/classCtest', userController.classCtest);
router.get('/classDtest', userController.classDtest);
router.get('/classEtest', userController.classEtest);
router.post('/insertclasstest', userController.insertclasstest);
router.post('/classtest', userController.classtest);


//job result
router.post('/jobresult', userController.jobresult);
router.post('/updatejobresult', userController.updatejobresult);
router.post('/insertjobresult', userController.insertjobresult);
router.post('/alltestsresult', userController.alltestsresult);