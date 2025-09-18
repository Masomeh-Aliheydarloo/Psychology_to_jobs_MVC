import { db } from '../config/db';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
//npm install --save-dev @types/nodemailer    in backend
//npm install nodemailer
import nodemailer from 'nodemailer';

import dotenv from 'dotenv';
import { NOW } from 'sequelize';
dotenv.config();

//setup email server
function sendEmailforWelcome(displayname: string, emailto: string) {
  //const nodemailer = require("nodemailer");
  //https://medium.com/@ayushnandanwar003/a-step-by-step-guide-to-sending-emails-with-node-js-and-nodemailer-via-gmail-c6fe1810f9fe#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImFiODYxNGZmNjI4OTNiYWRjZTVhYTc5YTc3MDNiNTk2NjY1ZDI0NzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDIzMjExODgzODY2Njc5NDg1ODMiLCJlbWFpbCI6Im0uYWxpaGV5ZGFybG9vQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MzU0NzcwMjYsIm5hbWUiOiJNIEhleWRhcmxvbyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJNnJKT3BHMVZLUExSQ2UwU2pjaVJXQlBaUUNwTjE0MkIyMTNiTWpqc2s0Vlo4SDNRPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ik0iLCJmYW1pbHlfbmFtZSI6IkhleWRhcmxvbyIsImlhdCI6MTczNTQ3NzMyNiwiZXhwIjoxNzM1NDgwOTI2LCJqdGkiOiI3ODRmOGY2NTI2NmM1YmNhMTBiYmQ0YzU2MTQyZjk0MTBkNTAyODQ5In0.f6vtmHTTKmDu2w8WJtnyBh_J0iGynB23DY53MwvgG_vyp6qeZVX2kvRzDFNLVhdY0mHptipa56Rmd3xIj4-1C8zInz0beQo_AiA1gg61S_o--sKzr6jzS1F02_pwIm-jb9MABaCBOuMOtKlZVzFuIpKHzNfV_FI-94KbAxRcTVRVOitIe-zS-_AFqub2bkUYiwq7Rpk-X6lxH1mqTDjVJVOD7F_pdPCxdsP3x5n1d5cOk4ABrjFht3ixCMcJ80-mvNdxQ_tpWTpM4NPrdtAOypI9pmjE11kHB6__Pgt2Kev274KHz_Xj8U-UCiloTF7WHJ-LHIKLaWCDkfe-YYCF8g
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.Email_user,
      pass: process.env.Email_pass,
    },
  });
  let body_email = `Hi ${displayname}<br/>${process.env.Email_body}`;


  const mailOptions = {
    from: process.env.Email_from,
    to: `${emailto}`,
    subject: process.env.Email_subject,
    text: body_email,
  };
  transporter.sendMail(mailOptions, (error: any, info: { response: any; }) => {
    if (error) {
      console.error('Error occurred:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });
}
function sendEmailforPassword(displayname: string, emailto: string, token: string) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.Email_user,
      pass: process.env.Email_pass,
    },
  });
const resetUrl = `${process.env.CORS_ORIGIN}/resetpassword?uname=${encodeURIComponent(displayname)}&token=${token}`;
  const body_email = `
    <p>Hi ${displayname},</p>
    <p>${process.env.Email_body_password }</p>
    <a href="${resetUrl}">${resetUrl}</a>
    <p>This link will expire in 15 minutes.</p>
  `;
  console.log("body_email", body_email);


  const mailOptions = {
    from: process.env.Email_from,
    to: `${emailto}`,
    subject: process.env.Email_subject_password,
    text: body_email,
  };
  transporter.sendMail(mailOptions, (error: any, info: { response: any; }) => {
    if (error) {
      console.error('Error occurred:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });
}
//login
export async function postlogin(username: string, password: string): Promise<{ personId: number, fullName: string } | null> {
  try {
    // Query the user
    const [rows]: any = await db.query(
      'SELECT Password, Personid, Fullname FROM persons WHERE Username = ?',
      [username]
    );

    if (rows.length === 0) {
      return null; // No user found
    }

    const userRecord = rows[0];

    // Compare passwords asynchronously
    const isValid = await bcrypt.compare(password, userRecord.Password);

    if (!isValid) {
      return null; // Password invalid
    }

    // Password valid
    return {
      personId: userRecord.Personid,
      fullName: userRecord.Fullname,
    };

  } catch (error: any) {
    console.error('Error during login:', error);
    throw new Error(error.message);
  }
}
export async function postcheckexam1(pid: string): Promise<any[] | null> {
  try {
    const [rows]: any = await db.query(
      'SELECT Result FROM mainexamresult WHERE Pid = ?',
      [pid]
    );

    if (rows.length === 0) {
      return null; // No exam results found
    }

    return rows;

  } catch (error: any) {
    console.error('Error fetching exam1 results:', error);
    throw new Error(error.message);
  }
}
export async function postcheckexam2(pid: string): Promise<any[] | null> {
  try {
    const [rows]: any = await db.query(
      'SELECT Result FROM big5result WHERE Pid = ?',
      [pid]
    );

    if (rows.length === 0) {
      return null; // No results found
    }

    return rows;

  } catch (error: any) {
    console.error('Error fetching exam2 results:', error);
    throw new Error(error.message);
  }
}
export async function postcheckclassexam(pid: string): Promise<any[] | null> {
  try {
    const [rows]: any = await db.query(
      'SELECT * FROM classresult WHERE Pid = ?',
      [pid]
    );

    if (rows.length === 0) {
      return null; // No class exam results found
    }

    return rows;

  } catch (error: any) {
    console.error('Error fetching class exam results:', error);
    throw new Error(error.message);
  }
}//change password
export async function postchangepassword(
  username: string,
  password: string,
  newPassword: string,
  pid: string
): Promise<number | null> {
  try {
    // 1. Get current password for the user
    const [rows]: any = await db.query(
      'SELECT Password FROM persons WHERE Username = ? AND Personid = ?',
      [username, pid]
    );

    if (rows.length === 0) {
      return null; // No user found
    }

    const user = rows[0];

    // 2. Compare current password
    const isMatch = await bcrypt.compare(password, user.Password);
    if (!isMatch) {
      return null; // Incorrect current password
    }

    // 3. Hash new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // 4. Update password in the database
    const [updateResult]: any = await db.query(
      'UPDATE persons SET Password = ? WHERE Personid = ?',
      [hashedNewPassword, pid]
    );

    if (updateResult.affectedRows > 0) {
      return 1; // Success
    } else {
      return 0; // Nothing updated
    }

  } catch (error: any) {
    console.error('Error changing password:', error);
    throw new Error(error.message);
  }
}//forgot password
export async function postforgetpassword(username: string, email: string): Promise<number | null> {
  try {
    // 1. Find user by username and email
    const [rows]: any = await db.query(
      'SELECT Personid, Fullname FROM persons WHERE Username = ? AND Email = ?',
      [username, email]
    );

    if (rows.length === 0) {
      return null; // No user found
    }

    const user = rows[0];
    const pid = user.Personid;
    const fullname = user.Fullname;

    // 2. Generate reset token and expiry
    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    // 3. Update user with token and expiry
    const [updateResult]: any = await db.query(
      'UPDATE persons SET reset_token = ?, reset_token_expires = ? WHERE Personid = ?',
      [token, expires, pid]
    );

    if (updateResult.affectedRows > 0) {
      // Optionally send email
      // await sendEmailforPassword(fullname, email, token);
      console.log("Reset token generated for:", email);
      return 1; // Success
    } else {
      return 0; // Nothing updated
    }

  } catch (error: any) {
    console.error('Error in forget password:', error);
    throw new Error(error.message);
  }
}
//reset password

export async function postresetPassword(token: string, newPassword: string): Promise<number | null> {
  try {
    // 1. Find user by token and check if token is still valid
    const [rows]: any = await db.query(
      'SELECT Personid FROM persons WHERE reset_token = ? AND reset_token_expires > NOW()',
      [token]
    );

    if (rows.length === 0) {
      return null; // No user found or token expired
    }

    const pid = rows[0].Personid;

    // 2. Hash the new password
    const hashedPassword = bcrypt.hashSync(newPassword, bcrypt.genSaltSync(10));

    // 3. Update the user's password and clear the reset token
    const [updateResult]: any = await db.query(
      'UPDATE persons SET Password = ?, reset_token = NULL, reset_token_expires = NULL WHERE Personid = ?',
      [hashedPassword, pid]
    );

    if (updateResult.affectedRows > 0) {
      return 1; // Success
    } else {
      return 0; // Nothing updated
    }
  } catch (err: any) {
    throw new Error(err.message);
  }
}

//info
export async function postgetinfo(pid: string): Promise<any | null> {
  try {
    const [rows]: any = await db.query('SELECT * FROM persons WHERE Personid = ?', [pid]);
    if (rows.length === 0) return null;
    return rows;
  } catch (error: any) {
    console.error('Error fetching user info:', error);
    throw new Error(error.message);
  }
}
export async function postupdateinfo(data: {
  pid: string;
  job: string;
  email: string;
  province: string;
  city: string;
  sex: string;
  education: string;
  major: string;
  cellphone: string;
  fullname: string;
  age: number;
  postc: string;
}): Promise<number> {
  try {
    const [result]: any = await db.query(
      `UPDATE persons 
       SET Fullname=?, City=?, Province=?, Email=?, Sex=?, Job=?, Tel=?, Age=?, Major=?, Education=?, Post=? 
       WHERE Personid=?`,
      [
        data.fullname,
        data.city,
        data.province,
        data.email,
        data.sex,
        data.job,
        data.cellphone,
        data.age,
        data.major,
        data.education,
        data.postc,
        data.pid
      ]
    );
    return result.affectedRows > 0 ? 1 : 0;
  } catch (error: any) {
    console.error('Error updating user info:', error);
    throw new Error(error.message);
  }
}//signup
export async function postsignup(data: {
  username: string;
  password: string;
  job: string;
  email: string;
  province: string;
  city: string;
  sex: string;
  education: string;
  major: string;
  cellphone: string;
  fullname: string;
  age: number;
  postc: string;
}): Promise<boolean | null> {
  try {
    const [existing]: any = await db.query('SELECT Personid FROM persons WHERE Username = ?', [data.username]);
    if (existing.length !== 0) return false; // Username exists

    const hashedPassword = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10));
    const [result]: any = await db.query(
      `INSERT INTO persons 
       (Username, Password, Fullname, City, Province, Email, Sex, Job, Tel, Age, Major, Education, Post, Cdate)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
      [
        data.username,
        hashedPassword,
        data.fullname,
        data.city,
        data.province,
        data.email,
        data.sex,
        data.job,
        data.cellphone,
        data.age,
        data.major,
        data.education,
        data.postc
      ]
    );
    return result.affectedRows > 0 ? true : null;
  } catch (error: any) {
    console.error('Error signing up:', error);
    throw new Error(error.message);
  }
}

//personality test
export async function getpersonalitytest(): Promise<any | null> {
  try {
    const [rows]: any = await db.query('SELECT * FROM mainQuestions ORDER BY RAND()');
    if (rows.length === 0) return null; // No test found
    return rows;
  } catch (error: any) {
    console.error('Error fetching personality test:', error);
    throw new Error(error.message);
  }
}

export async function postinsertpersonalitytest(data: {
  pid: string,
  result: string,
  code1: string,
  code2: string,
  code1_lenght: number,
  code2_lenght: number
}): Promise<boolean | null> {


  try {
    const [result]: any = await db.query(
      'INSERT INTO mainexamresult (Pid, Result, Code1, Code2, Code1_Lenght, Code2_Lenght, Date) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        data.pid,
        data.result,
        data.code1,
        data.code2,
        data.code1_lenght,
        data.code2_lenght,
        NOW()
      ]
    );

    if (result.affectedRows > 0) {
      return true; // Insert successful
    } else {
      return null; // Insert failed
    }
  } catch (error: any) {
    console.error('Error inserting personality test:', error);
    throw new Error(error.message);
  }
}

export async function postpersonalitytestresult(pid: string): Promise<any[] | null> {
  try {
    const [result]: any = await db.query(
      'SELECT * FROM mainexamresult WHERE Pid = ?',
      [pid]
    );

    if (result.length === 0) {
      return null; // No record found
    }

    return result;
  } catch (error: any) {
    console.error('Error fetching personality test result:', error);
    throw new Error(error.message);
  }
}

//business test
export async function getbusinesstest(): Promise<any | null> {
  try {
    const [result]: any = await db.query(
      'SELECT ROW_NUMBER() OVER(ORDER BY RAND()) AS c,Qnumber,Qid,Qtitle FROM big5questions ', []
    );

    if (result.length === 0) {
      return null; // No test found
    }

    return result;
  } catch (error: any) {
    console.error('Error fetching business test:', error);
    throw new Error(error.message);
  }
}
     
export async function postinsertbusinesstest(data: {
  pid: string,
  sumE: number,
  sumA: number,
  sumC: number,
  sumN: number,
  sumO: number,
  result: string
}): Promise<boolean | null> {


  try {
    const [result]: any = await db.query(
      'INSERT INTO big5result (Pid, E, A, C, N, O, Date, Result) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [data.pid, data.sumE, data.sumA, data.sumC, data.sumN, data.sumO, NOW(), data.result]
    );

    return result.affectedRows > 0 ? true : null;
  } catch (err: any) {
    console.error('Error inserting business test result:', err);
    throw new Error(err.message);
  }
}

export async function postbusinesstestresult(pid: string): Promise<any | null> {
  try {
    const [result]: any = await db.query(
      'SELECT * FROM big5result WHERE Pid = ? ', [pid]
    );

    if (result.length === 0) {
      return null; // No user found
    }

    return result;
  } catch (error: any) {
    console.error('Error fetching business test result:', error);
    throw new Error(error.message);
  }
}
       
export async function postjobresult(pid: string): Promise<any[] | null> {
  try {
    const [result]: any = await db.query(
      'SELECT PJid, Selected, JobName FROM person_jobs JOIN jobs ON jobs.JobCode = person_jobs.Jcode WHERE Personid = ?',
      [pid]
    );

    return result.length > 0 ? result : null;
  } catch (err: any) {
    console.error('Error fetching job result:', err);
    throw new Error(err.message);
  }
}

export async function postupdatejobresult(pjid: string, selected: number): Promise<any | null> {
  try {
    const [result]: any = await db.query(
      'UPDATE person_jobs SET Selected = ? WHERE PJid = ?', [selected, pjid]
    );

    return result.affectedRows > 0 ? true : null;
  } catch (err: any) {
    console.error('Error updating job result:', err);
    throw new Error(err.message);
  }
}

export async function postinsertjobresult(pid: string, jobs: string): Promise<any | null> {
  try {
    const [result]: any = await db.query(
      'INSERT IGNORE INTO person_jobs (Personid,Jcode,Selected) VALUES (?,?,0)',
      [
        pid,
        jobs
      ]
    );

    if (result.affectedRows > 0) {
      return true;
    } else {
      return null;
    }
  } catch (err: any) {
    console.error('Error inserting job result:', err);
    throw new Error(err.message);
  }
}
//all test result
export async function postalltestsresult(pid: string): Promise<any | null> {
  try {
    const [result]: any = await db.query(
      'SELECT big5result.Pid,big5result.E,big5result.A,big5result.C,big5result.N,big5result.O,mainexamresult.Result,mainexamresult.Code1,mainexamresult.Code2,big5result.Result AS BResult FROM big5result,mainexamresult WHERE big5result.Pid=mainexamresult.Pid AND big5result.Pid = ?',
      [pid]
    );

    if (result.length === 0) {
      return null; // No user found
    }
    return result;
  } catch (error: any) {
    console.error('Error fetching all tests result:', error);
    throw new Error(error.message);
  }
}

//class test
export async function getclassAtest(): Promise<any | null> {
  try {
    const [result]: any = await db.query(
      'SELECT ROW_NUMBER() OVER(ORDER BY RAND()) AS c,QAnumber,QAid,QAtitle FROM classaquestions ', []
    );

    if (result.length === 0) {
      return null; // No test found
    }

    return result;
  } catch (error: any) {
    console.error('Error fetching class A test:', error);
    throw new Error(error.message);
  }
}
     
export async function postinsertclasstest(data: {
  pid: string,
  sum: number,
  result: string,
  type: string
}): Promise<boolean | null> {


  try {
    const [result]: any = await db.query(
      'INSERT INTO classresult (Pid, Score, Date, Result, Type) VALUES (?, ?, ?, ?, ?)',
      [data.pid, data.sum, NOW(), data.result, data.type]
    );

    return result.affectedRows > 0 ? true : null;
  } catch (err: any) {
    console.error('Error inserting class test:', err);
    throw new Error(err.message);
  }
}

export async function getclassBtest(): Promise<any | null> {
  try {
    const [result]: any = await db.query(
      'SELECT ROW_NUMBER() OVER(ORDER BY RAND()) AS c,QBnumber,QBid,QBtitle FROM classbquestions ', []
    );

    if (result.length === 0) {
      return null; // No test found
    }

    return result;
  } catch (error: any) {
    console.error('Error fetching class B test:', error);
    throw new Error(error.message);
  }
}

export async function getclassCtest(): Promise<any | null> {
  try {
    const [result]: any = await db.query(
      'SELECT ROW_NUMBER() OVER(ORDER BY RAND()) AS c,QCnumber,QCid,QCtitle FROM classcquestions ', []
    );

    if (result.length === 0) {
      return null; // No test found
    }

    return result;
  } catch (error: any) {
    console.error('Error fetching class C test:', error);
    throw new Error(error.message);
  }
}

export async function getclassDtest(): Promise<any | null> {
  try {
    const [result]: any = await db.query(
      'SELECT ROW_NUMBER() OVER(ORDER BY RAND()) AS c,QDnumber,QDid,QDtitle FROM classdquestions ', []
    );

    if (result.length === 0) {
      return null; // No test found
    }

    return result;
  } catch (error: any) {
    console.error('Error fetching class D test:', error);
    throw new Error(error.message);
  }
}

export async function getclassEtest(): Promise<any | null> {
  try {
    const [result]: any = await db.query(
      'SELECT ROW_NUMBER() OVER(ORDER BY RAND()) AS c,QEnumber,QEid,QEtitle FROM classequestions ', []
    );

    if (result.length === 0) {
      return null; // No test found
    }

    return result;
  } catch (error: any) {
    console.error('Error fetching class E test:', error);
    throw new Error(error.message);
  }
}

export async function postclasstest(pid: string): Promise<any | null> {
  try {
    const [result]: any = await db.query(
      'SELECT * FROM classresult WHERE Pid = ?', [pid]
    );

    if (result.length === 0) {
      return null; // No user found
    }
    return result;
  } catch (error: any) {
    console.error('Error fetching class test result:', error);
    throw new Error(error.message);
  }
}