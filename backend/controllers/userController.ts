import type { Request, Response } from 'express';
import * as modelcontroler from '../models/userModel';
//login
export async function login(req: Request, res: Response) {

  try {
    const { username, password } = req.body;

     if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }

    const user = await modelcontroler.postlogin(username, password);
    if (user) {
       res.status(200).json(user);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
export async function checkexam1(req: Request, res: Response) {

  try {
    const { pid } = req.body;

     if (!pid) {
      return res.status(400).json({ error: 'Person ID (pid) is required.' });
    }

    const result = await modelcontroler.postcheckexam1(pid);
    if (result) {
     res.status(200).json(result);

    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
export async function checkexam2(req: Request, res: Response) {

  try {
    const { pid } = req.body;

     if (!pid) {
      return res.status(400).json({ error: 'Person ID (pid) is required.' });
    }
    const result = await modelcontroler.postcheckexam2(pid);
    if (result) {
      res.status(200).json(result);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
export async function checkclassexam(req: Request, res: Response) {

  try {
    const { pid } = req.body;

    if (!pid) {
      return res.status(400).json({ error: 'Person ID (pid) is required.' });
    }
    const result = await modelcontroler.postcheckclassexam(pid);
    if (result) {
      res.status(200).json(result);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
export async function changepassword(req: Request, res: Response) {

  try {
    const { username, password, newPassword, pid } = req.body;

    if (!username || !password || !newPassword || !pid) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const result = await modelcontroler.postchangepassword(username, password, newPassword, pid);

    if (result) {
       res.status(200).json(result);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
export async function forgetpassword(req: Request, res: Response) {

  try {
    const { username, email } = req.body;

     if (!username || !email) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const result = await modelcontroler.postforgetpassword(username, email);
    if (result) {
       res.status(200).json(result);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
export async function resetpassword(req: Request, res: Response) {

  try {
    const { token, newPassword } = req.body;

     if (!token || !newPassword) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const result = await modelcontroler.postresetPassword(token, newPassword);
    if (result) {
      res.status(200).json(result);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}

   
//info
export async function getUserInfo(req: Request, res: Response) {

  try {
    const { pid } = req.body;

    if (!pid) {
      return res.status(400).json({ error: 'Person ID (pid) is required.' });
    }

    const result = await modelcontroler.postgetinfo(pid);
    if (result) {
      res.status(200).json(result);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
export async function updateUserInfo(req: Request, res: Response) {

  try {
    const {
      pid,
      job,
      email,
      province,
      city,
      sex,
      education,
      major,
      cellphone,
      fullname,
      age,
      postc
    } = req.body;


 if (!pid || !email || !province || !city || !fullname || !age || !postc || !cellphone || !education || !major || !job || !sex) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    
    const result = await modelcontroler.postupdateinfo({
      pid, job,
      email,
      province,
      city,
      sex,
      education,
      major,
      cellphone,
      fullname,
      age,
      postc
    });
   if (result) {
      res.status(200).json(result);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
//signup
export async function signup(req: Request, res: Response) {

  try {
    const { username, password, job, email, province, city, sex, education, major, cellphone, fullname, age, postc } = req.body;

     if (!username || !password || !email || !province || !city || !fullname || !age || !postc || !cellphone || !education || !major || !job || !sex) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const result = await modelcontroler.postsignup({
      username, password, job,
      email,
      province,
      city,
      sex,
      education,
      major,
      cellphone,
      fullname,
      age,
      postc
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
//personality test
export async function personalitytest(req: Request, res: Response) {

  try {


    const result = await modelcontroler.getpersonalitytest();

     if (result) {
      res.status(200).json(result);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
export async function insertpersonalitytest(req: Request, res: Response) {

  try {
    const { pid, result, code1, code2, code1_lenght, code2_lenght } = req.body;

     if (!pid || !result || !code1 || !code2 || !code1_lenght || !code2_lenght) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    
    const tests = await modelcontroler.postinsertpersonalitytest({
      pid, result, code1, code2, code1_lenght, code2_lenght
    });
    if (tests) {
      res.status(200).json(tests);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
export async function personalitytestresult(req: Request, res: Response) {

  try {
    const { pid } = req.body;

    if (!pid) {
      return res.status(400).json({ error: 'Person ID (pid) is required.' });
    }

    const result = await modelcontroler.postpersonalitytestresult(pid);
    if (result) {
      res.status(200).json(result);

    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
//business test
export async function businesstest(req: Request, res: Response) {

  try {

    const result = await modelcontroler.getbusinesstest();

    if (result) {
      res.status(200).json(result);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }


}
export async function insertbusinesstest(req: Request, res: Response) {

  try {
    const { pid, sumE, sumA, sumC, sumN, sumO, result } = req.body;

    if (!pid || !sumE || !sumA || !sumC || !sumN || !sumO || !result) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    
    const tests = await modelcontroler.postinsertbusinesstest({
      pid, sumE, sumA, sumC, sumN, sumO, result
    });
    if (tests) {
      res.status(200).json(tests);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
export async function businesstestresult(req: Request, res: Response) {

  try {
    const { pid } = req.body;

    if (!pid) {
      return res.status(400).json({ error: 'Person ID (pid) is required.' });
    }

    const result = await modelcontroler.postbusinesstestresult(pid);
    if (result) {
      res.status(200).json(result);

    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
//job result
export async function jobresult(req: Request, res: Response) {

  try {
    const { pid } = req.body;

     if (!pid) {
      return res.status(400).json({ error: 'Person ID (pid) is required.' });
    }

    const result = await modelcontroler.postjobresult(pid);
    if (result) {
      res.status(200).json(result);

    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
export async function updatejobresult(req: Request, res: Response) {

  try {
    const { pjid, selected } = req.body;

     if (!pjid || !selected) {
      return res.status(400).json({ error: 'Person ID (pjid) and selected are required.' });
    }

    const result = await modelcontroler.postupdatejobresult(pjid, selected);
    if (result) {
      res.status(200).json(result);

    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
export async function insertjobresult(req: Request, res: Response) {

  try {
    const { pid, Jobs } = req.body;

    if (!pid || !Jobs) {
      return res.status(400).json({ error: 'Person ID (pid) and Jobs are required.' });
    }

    const result = await modelcontroler.postinsertjobresult(pid, Jobs);
    if (result) {
      res.status(200).json(result);

    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
export async function alltestsresult(req: Request, res: Response) {

  try {
    const { pid } = req.body;

    if (!pid) {
      return res.status(400).json({ error: 'Person ID (pid) is required.' });
    }

    const result = await modelcontroler.postalltestsresult(pid);
    if (result) {
      res.status(200).json(result);

    } else {
       res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
//class test
export async function classAtest(req: Request, res: Response) {

  try {

    const tests = await modelcontroler.getclassAtest();

    if (tests) {
      res.status(200).json(tests);

    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }


}
export async function insertclasstest(req: Request, res: Response) {

  try {
    const { pid, sum ,result, type } = req.body;

    
    if (!pid || !sum || !result || !type) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const tests = await modelcontroler.postinsertclasstest({
      pid, sum ,result, type
    });
    if (tests) {
      res.status(200).json(tests);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }
}
export async function classBtest(req: Request, res: Response) {

  try {

    const tests = await modelcontroler.getclassBtest();

    if (tests) {
      res.status(200).json(tests);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }


}
export async function classCtest(req: Request, res: Response) {

  try {

    const tests = await modelcontroler.getclassCtest();

    if (tests) {
      res.status(200).json(tests);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }


}
export async function classDtest(req: Request, res: Response) {

  try {

    const tests = await modelcontroler.getclassDtest();

    if (tests) {
      res.status(200).json(tests);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }


}
export async function classEtest(req: Request, res: Response) {

  try {

    const tests = await modelcontroler.getclassEtest();

    if (tests) {
       res.status(200).json(tests);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }


}
export async function classtest(req: Request, res: Response) {

  try {
    const { pid } = req.body;

     if (!pid) {
      return res.status(400).json({ error: 'Person ID (pid) is required.' });
    }

    const tests = await modelcontroler.postclasstest(pid);

    if (tests) {
      res.status(200).json(tests);
    } else {
      res.json(null);
    }
  } catch (err) {

    res.status(500).json({ error: (err as Error).message });
  }


}