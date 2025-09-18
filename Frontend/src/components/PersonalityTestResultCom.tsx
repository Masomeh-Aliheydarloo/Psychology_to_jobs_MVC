import { useState } from "react";


import data_A from "./result/data_A";

import data_C from "./result/data_C";

import titles from "./result/titles";
import data_D from "./result/data_D";
import data_B from "./result/data_B";

import { AccordionItem } from "./AccordionItem";

interface PersonalityTestResultComProps {
  code1: string;
  code2: string;
  len: number;
}


export const PersonalityTestResultCom: React.FC<PersonalityTestResultComProps> = ({ code1, code2, len }) => {

  
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index: any) => {
/*
    window.scrollTo({
      top: 0,
      behavior: "auto"

    });*/

    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  let title_Intro: string = "";
  let content_Intro: string = "";

  let title_Strengths: string = "";
  let content_Strengths: string = "";

  let title_Limitations: string = "";
  let content_Limitations: string = "";

  let AS_AN_INDIVIDUAL: string = titles.AS_AN_INDIVIDUAL;
  let AS_A_COMMUNICATOR: string = titles.AS_A_COMMUNICATOR;
  let AS_A_GOAL_SETTER: string = titles.AS_A_GOAL_SETTER;
  let AS_A_CAREER_PERSON: string = titles.AS_A_CAREER_PERSON;
  let AS_A_PARENT: string = titles.AS_A_PARENT;
  let AS_A_CHILD: string = titles.AS_A_CHILD;
  let AS_A_FRIEND: string = titles.AS_A_FRIEND;
  let AS_A_COMMITTED_COMPANION: string = titles.AS_A_COMMITTED_COMPANION;


  let content_AS_AN_INDIVIDUAL: string = AS_AN_INDIVIDUAL;
  let content_AS_A_COMMUNICATOR: string = AS_A_COMMUNICATOR;
  let content_AS_A_GOAL_SETTER: string = AS_A_GOAL_SETTER;
  let content_AS_A_CAREER_PERSON: string = AS_A_CAREER_PERSON;
  let content_AS_A_PARENT: string = AS_A_PARENT;
  let content_AS_A_CHILD: string = AS_A_CHILD;
  let content_AS_A_FRIEND: string = AS_A_FRIEND;
  let content_AS_A_COMMITTED_COMPANION: string = AS_A_COMMITTED_COMPANION;

  let L_AS_AN_INDIVIDUAL: string = titles.L_AS_AN_INDIVIDUAL;
  let L_AS_A_COMMUNICATOR: string = titles.L_AS_A_COMMUNICATOR;
  let L_AS_A_GOAL_SETTER: string = titles.L_AS_A_GOAL_SETTER;
  let L_AS_A_CAREER_PERSON: string = titles.L_AS_A_CAREER_PERSON;
  let L_AS_A_PARENT: string = titles.L_AS_A_PARENT;
  let L_AS_A_CHILD: string = titles.L_AS_A_CHILD;
  let L_AS_A_FRIEND: string = titles.L_AS_A_FRIEND;
  let L_AS_A_COMMITTED_COMPANION: string = titles.L_AS_A_COMMITTED_COMPANION;


  let L_content_AS_AN_INDIVIDUAL: string = L_AS_AN_INDIVIDUAL;
  let L_content_AS_A_COMMUNICATOR: string = L_AS_A_COMMUNICATOR;
  let L_content_AS_A_GOAL_SETTER: string = L_AS_A_GOAL_SETTER;
  let L_content_AS_A_CAREER_PERSON: string = L_AS_A_CAREER_PERSON;
  let L_content_AS_A_PARENT: string = L_AS_A_PARENT;
  let L_content_AS_A_CHILD: string = L_AS_A_CHILD;
  let L_content_AS_A_FRIEND: string = L_AS_A_FRIEND;
  let L_content_AS_A_COMMITTED_COMPANION: string = L_AS_A_COMMITTED_COMPANION;
  //code 1
  if (JSON.stringify(code1).includes("A")) {

    title_Intro = titles.Intro;
    content_Intro = content_Intro.concat(data_A.Intro_content);

    title_Strengths = titles.Strengths;
    content_AS_AN_INDIVIDUAL = content_AS_AN_INDIVIDUAL.concat(data_A.Strengths_100_content_AS_AN_INDIVIDUAL);
    content_AS_A_COMMUNICATOR = content_AS_A_COMMUNICATOR.concat(data_A.Strengths_100_content_AS_A_COMMUNICATOR);
    content_AS_A_GOAL_SETTER = content_AS_A_GOAL_SETTER.concat(data_A.Strengths_100_content_AS_A_GOAL_SETTER);
    content_AS_A_CAREER_PERSON = content_AS_A_CAREER_PERSON.concat(data_A.Strengths_100_content_AS_A_CAREER_PERSON);
    content_AS_A_PARENT = content_AS_A_PARENT.concat(data_A.Strengths_100_content_AS_A_PARENT);
    content_AS_A_CHILD = content_AS_A_CHILD.concat(data_A.Strengths_100_content_AS_A_CHILD);
    content_AS_A_FRIEND = content_AS_A_FRIEND.concat(data_A.Strengths_100_content_AS_A_FRIEND);
    content_AS_A_COMMITTED_COMPANION = content_AS_A_COMMITTED_COMPANION.concat(data_A.Strengths_100_content_AS_A_COMMITTED_COMPANION);

    title_Limitations = titles.Limitations;
    L_content_AS_AN_INDIVIDUAL = L_content_AS_AN_INDIVIDUAL.concat(data_A.Limitations_100_content_AS_AN_INDIVIDUAL);
    L_content_AS_A_COMMUNICATOR = L_content_AS_A_COMMUNICATOR.concat(data_A.Limitations_100_content_AS_A_COMMUNICATOR);
    L_content_AS_A_GOAL_SETTER = L_content_AS_A_GOAL_SETTER.concat(data_A.Limitations_100_content_AS_A_GOAL_SETTER);
    L_content_AS_A_CAREER_PERSON = L_content_AS_A_CAREER_PERSON.concat(data_A.Limitations_100_content_AS_A_CAREER_PERSON);
    L_content_AS_A_PARENT = L_content_AS_A_PARENT.concat(data_A.Limitations_100_content_AS_A_PARENT);
    L_content_AS_A_CHILD = L_content_AS_A_CHILD.concat(data_A.Limitations_100_content_AS_A_CHILD);
    L_content_AS_A_FRIEND = L_content_AS_A_FRIEND.concat(data_A.Limitations_100_content_AS_A_FRIEND);
    L_content_AS_A_COMMITTED_COMPANION = L_content_AS_A_COMMITTED_COMPANION.concat(data_A.Limitations_100_content_AS_A_COMMITTED_COMPANION);
  }
  if (JSON.stringify(code1).includes("B")) {

    title_Intro = titles.Intro;
    content_Intro = content_Intro.concat(data_B.Intro_content);

    title_Strengths = titles.Strengths;
    content_AS_AN_INDIVIDUAL = content_AS_AN_INDIVIDUAL.concat(data_B.Strengths_100_content_AS_AN_INDIVIDUAL);
    content_AS_A_COMMUNICATOR = content_AS_A_COMMUNICATOR.concat(data_B.Strengths_100_content_AS_A_COMMUNICATOR);
    content_AS_A_GOAL_SETTER = content_AS_A_GOAL_SETTER.concat(data_B.Strengths_100_content_AS_A_GOAL_SETTER);
    content_AS_A_CAREER_PERSON = content_AS_A_CAREER_PERSON.concat(data_B.Strengths_100_content_AS_A_CAREER_PERSON);
    content_AS_A_PARENT = content_AS_A_PARENT.concat(data_B.Strengths_100_content_AS_A_PARENT);
    content_AS_A_CHILD = content_AS_A_CHILD.concat(data_B.Strengths_100_content_AS_A_CHILD);
    content_AS_A_FRIEND = content_AS_A_FRIEND.concat(data_B.Strengths_100_content_AS_A_FRIEND);
    content_AS_A_COMMITTED_COMPANION = content_AS_A_COMMITTED_COMPANION.concat(data_B.Strengths_100_content_AS_A_COMMITTED_COMPANION);


    title_Limitations = titles.Limitations;
    L_content_AS_AN_INDIVIDUAL = L_content_AS_AN_INDIVIDUAL.concat(data_B.Limitations_100_content_AS_AN_INDIVIDUAL);
    L_content_AS_A_COMMUNICATOR = L_content_AS_A_COMMUNICATOR.concat(data_B.Limitations_100_content_AS_A_COMMUNICATOR);
    L_content_AS_A_GOAL_SETTER = L_content_AS_A_GOAL_SETTER.concat(data_B.Limitations_100_content_AS_A_GOAL_SETTER);
    L_content_AS_A_CAREER_PERSON = L_content_AS_A_CAREER_PERSON.concat(data_B.Limitations_100_content_AS_A_CAREER_PERSON);
    L_content_AS_A_PARENT = L_content_AS_A_PARENT.concat(data_B.Limitations_100_content_AS_A_PARENT);
    L_content_AS_A_CHILD = L_content_AS_A_CHILD.concat(data_B.Limitations_100_content_AS_A_CHILD);
    L_content_AS_A_FRIEND = L_content_AS_A_FRIEND.concat(data_B.Limitations_100_content_AS_A_FRIEND);
    L_content_AS_A_COMMITTED_COMPANION = L_content_AS_A_COMMITTED_COMPANION.concat(data_B.Limitations_100_content_AS_A_COMMITTED_COMPANION);
  }
  if (JSON.stringify(code1).includes("C")) {

    title_Intro = titles.Intro;
    content_Intro = content_Intro.concat(data_C.Intro_content);

    title_Strengths = titles.Strengths;
    content_AS_AN_INDIVIDUAL = content_AS_AN_INDIVIDUAL.concat(data_C.Strengths_100_content_AS_AN_INDIVIDUAL);
    content_AS_A_COMMUNICATOR = content_AS_A_COMMUNICATOR.concat(data_C.Strengths_100_content_AS_A_COMMUNICATOR);
    content_AS_A_GOAL_SETTER = content_AS_A_GOAL_SETTER.concat(data_C.Strengths_100_content_AS_A_GOAL_SETTER);
    content_AS_A_CAREER_PERSON = content_AS_A_CAREER_PERSON.concat(data_C.Strengths_100_content_AS_A_CAREER_PERSON);
    content_AS_A_PARENT = content_AS_A_PARENT.concat(data_C.Strengths_100_content_AS_A_PARENT);
    content_AS_A_CHILD = content_AS_A_CHILD.concat(data_C.Strengths_100_content_AS_A_CHILD);
    content_AS_A_FRIEND = content_AS_A_FRIEND.concat(data_C.Strengths_100_content_AS_A_FRIEND);
    content_AS_A_COMMITTED_COMPANION = content_AS_A_COMMITTED_COMPANION.concat(data_C.Strengths_100_content_AS_A_COMMITTED_COMPANION);

    title_Limitations = titles.Limitations;
    L_content_AS_AN_INDIVIDUAL = L_content_AS_AN_INDIVIDUAL.concat(data_C.Limitations_100_content_AS_AN_INDIVIDUAL);
    L_content_AS_A_COMMUNICATOR = L_content_AS_A_COMMUNICATOR.concat(data_C.Limitations_100_content_AS_A_COMMUNICATOR);
    L_content_AS_A_GOAL_SETTER = L_content_AS_A_GOAL_SETTER.concat(data_C.Limitations_100_content_AS_A_GOAL_SETTER);
    L_content_AS_A_CAREER_PERSON = L_content_AS_A_CAREER_PERSON.concat(data_C.Limitations_100_content_AS_A_CAREER_PERSON);
    L_content_AS_A_PARENT = L_content_AS_A_PARENT.concat(data_C.Limitations_100_content_AS_A_PARENT);
    L_content_AS_A_CHILD = L_content_AS_A_CHILD.concat(data_C.Limitations_100_content_AS_A_CHILD);
    L_content_AS_A_FRIEND = L_content_AS_A_FRIEND.concat(data_C.Limitations_100_content_AS_A_FRIEND);
    L_content_AS_A_COMMITTED_COMPANION = L_content_AS_A_COMMITTED_COMPANION.concat(data_C.Limitations_100_content_AS_A_COMMITTED_COMPANION);
  }
  if (JSON.stringify(code1).includes("D")) {

    title_Intro = titles.Intro;
    content_Intro = content_Intro.concat(data_D.Intro_content);

    title_Strengths = titles.Strengths;
    content_AS_AN_INDIVIDUAL = content_AS_AN_INDIVIDUAL.concat(data_D.Strengths_100_content_AS_AN_INDIVIDUAL);
    content_AS_A_COMMUNICATOR = content_AS_A_COMMUNICATOR.concat(data_D.Strengths_100_content_AS_A_COMMUNICATOR);
    content_AS_A_GOAL_SETTER = content_AS_A_GOAL_SETTER.concat(data_D.Strengths_100_content_AS_A_GOAL_SETTER);
    content_AS_A_CAREER_PERSON = content_AS_A_CAREER_PERSON.concat(data_D.Strengths_100_content_AS_A_CAREER_PERSON);
    content_AS_A_PARENT = content_AS_A_PARENT.concat(data_D.Strengths_100_content_AS_A_PARENT);
    content_AS_A_CHILD = content_AS_A_CHILD.concat(data_D.Strengths_100_content_AS_A_CHILD);
    content_AS_A_FRIEND = content_AS_A_FRIEND.concat(data_D.Strengths_100_content_AS_A_FRIEND);
    content_AS_A_COMMITTED_COMPANION = content_AS_A_COMMITTED_COMPANION.concat(data_D.Strengths_100_content_AS_A_COMMITTED_COMPANION);

    title_Limitations = titles.Limitations;
    L_content_AS_AN_INDIVIDUAL = L_content_AS_AN_INDIVIDUAL.concat(data_D.Limitations_100_content_AS_AN_INDIVIDUAL);
    L_content_AS_A_COMMUNICATOR = L_content_AS_A_COMMUNICATOR.concat(data_D.Limitations_100_content_AS_A_COMMUNICATOR);
    L_content_AS_A_GOAL_SETTER = L_content_AS_A_GOAL_SETTER.concat(data_D.Limitations_100_content_AS_A_GOAL_SETTER);
    L_content_AS_A_CAREER_PERSON = L_content_AS_A_CAREER_PERSON.concat(data_D.Limitations_100_content_AS_A_CAREER_PERSON);
    L_content_AS_A_PARENT = L_content_AS_A_PARENT.concat(data_D.Limitations_100_content_AS_A_PARENT);
    L_content_AS_A_CHILD = L_content_AS_A_CHILD.concat(data_D.Limitations_100_content_AS_A_CHILD);
    L_content_AS_A_FRIEND = L_content_AS_A_FRIEND.concat(data_D.Limitations_100_content_AS_A_FRIEND);
    L_content_AS_A_COMMITTED_COMPANION = L_content_AS_A_COMMITTED_COMPANION.concat(data_D.Limitations_100_content_AS_A_COMMITTED_COMPANION);
  }
  //code 2
  if (len === 100) {

    if (JSON.stringify(code2).includes("A")) {

      content_Intro = content_Intro.concat(data_A.Intro_content);
      content_AS_AN_INDIVIDUAL = content_AS_AN_INDIVIDUAL.concat(data_A.Strengths_100_content_AS_AN_INDIVIDUAL);
      content_AS_A_COMMUNICATOR = content_AS_A_COMMUNICATOR.concat(data_A.Strengths_100_content_AS_A_COMMUNICATOR);
      content_AS_A_GOAL_SETTER = content_AS_A_GOAL_SETTER.concat(data_A.Strengths_100_content_AS_A_GOAL_SETTER);
      content_AS_A_CAREER_PERSON = content_AS_A_CAREER_PERSON.concat(data_A.Strengths_100_content_AS_A_CAREER_PERSON);
      content_AS_A_PARENT = content_AS_A_PARENT.concat(data_A.Strengths_100_content_AS_A_PARENT);
      content_AS_A_CHILD = content_AS_A_CHILD.concat(data_A.Strengths_100_content_AS_A_CHILD);
      content_AS_A_FRIEND = content_AS_A_FRIEND.concat(data_A.Strengths_100_content_AS_A_FRIEND);
      content_AS_A_COMMITTED_COMPANION = content_AS_A_COMMITTED_COMPANION.concat(data_A.Strengths_100_content_AS_A_COMMITTED_COMPANION);


      L_content_AS_AN_INDIVIDUAL = L_content_AS_AN_INDIVIDUAL.concat(data_A.Limitations_100_content_AS_AN_INDIVIDUAL);
      L_content_AS_A_COMMUNICATOR = L_content_AS_A_COMMUNICATOR.concat(data_A.Limitations_100_content_AS_A_COMMUNICATOR);
      L_content_AS_A_GOAL_SETTER = L_content_AS_A_GOAL_SETTER.concat(data_A.Limitations_100_content_AS_A_GOAL_SETTER);
      L_content_AS_A_CAREER_PERSON = L_content_AS_A_CAREER_PERSON.concat(data_A.Limitations_100_content_AS_A_CAREER_PERSON);
      L_content_AS_A_PARENT = L_content_AS_A_PARENT.concat(data_A.Limitations_100_content_AS_A_PARENT);
      L_content_AS_A_CHILD = L_content_AS_A_CHILD.concat(data_A.Limitations_100_content_AS_A_CHILD);
      L_content_AS_A_FRIEND = L_content_AS_A_FRIEND.concat(data_A.Limitations_100_content_AS_A_FRIEND);
      L_content_AS_A_COMMITTED_COMPANION = L_content_AS_A_COMMITTED_COMPANION.concat(data_A.Limitations_100_content_AS_A_COMMITTED_COMPANION);

    }
    if (JSON.stringify(code2).includes("B")) {

      content_Intro = content_Intro.concat(data_B.Intro_content);
      content_AS_AN_INDIVIDUAL = content_AS_AN_INDIVIDUAL.concat(data_B.Strengths_100_content_AS_AN_INDIVIDUAL);
      content_AS_A_COMMUNICATOR = content_AS_A_COMMUNICATOR.concat(data_B.Strengths_100_content_AS_A_COMMUNICATOR);
      content_AS_A_GOAL_SETTER = content_AS_A_GOAL_SETTER.concat(data_B.Strengths_100_content_AS_A_GOAL_SETTER);
      content_AS_A_CAREER_PERSON = content_AS_A_CAREER_PERSON.concat(data_B.Strengths_100_content_AS_A_CAREER_PERSON);
      content_AS_A_PARENT = content_AS_A_PARENT.concat(data_B.Strengths_100_content_AS_A_PARENT);
      content_AS_A_CHILD = content_AS_A_CHILD.concat(data_B.Strengths_100_content_AS_A_CHILD);
      content_AS_A_FRIEND = content_AS_A_FRIEND.concat(data_B.Strengths_100_content_AS_A_FRIEND);
      content_AS_A_COMMITTED_COMPANION = content_AS_A_COMMITTED_COMPANION.concat(data_B.Strengths_100_content_AS_A_COMMITTED_COMPANION);



      L_content_AS_AN_INDIVIDUAL = L_content_AS_AN_INDIVIDUAL.concat(data_B.Limitations_100_content_AS_AN_INDIVIDUAL);
      L_content_AS_A_COMMUNICATOR = L_content_AS_A_COMMUNICATOR.concat(data_B.Limitations_100_content_AS_A_COMMUNICATOR);
      L_content_AS_A_GOAL_SETTER = L_content_AS_A_GOAL_SETTER.concat(data_B.Limitations_100_content_AS_A_GOAL_SETTER);
      L_content_AS_A_CAREER_PERSON = L_content_AS_A_CAREER_PERSON.concat(data_B.Limitations_100_content_AS_A_CAREER_PERSON);
      L_content_AS_A_PARENT = L_content_AS_A_PARENT.concat(data_B.Limitations_100_content_AS_A_PARENT);
      L_content_AS_A_CHILD = L_content_AS_A_CHILD.concat(data_B.Limitations_100_content_AS_A_CHILD);
      L_content_AS_A_FRIEND = L_content_AS_A_FRIEND.concat(data_B.Limitations_100_content_AS_A_FRIEND);
      L_content_AS_A_COMMITTED_COMPANION = L_content_AS_A_COMMITTED_COMPANION.concat(data_B.Limitations_100_content_AS_A_COMMITTED_COMPANION);

    }
    if (JSON.stringify(code2).includes("C")) {


      content_Intro = content_Intro.concat(data_C.Intro_content);


      content_AS_AN_INDIVIDUAL = content_AS_AN_INDIVIDUAL.concat(data_C.Strengths_100_content_AS_AN_INDIVIDUAL);
      content_AS_A_COMMUNICATOR = content_AS_A_COMMUNICATOR.concat(data_C.Strengths_100_content_AS_A_COMMUNICATOR);
      content_AS_A_GOAL_SETTER = content_AS_A_GOAL_SETTER.concat(data_C.Strengths_100_content_AS_A_GOAL_SETTER);
      content_AS_A_CAREER_PERSON = content_AS_A_CAREER_PERSON.concat(data_C.Strengths_100_content_AS_A_CAREER_PERSON);
      content_AS_A_PARENT = content_AS_A_PARENT.concat(data_C.Strengths_100_content_AS_A_PARENT);
      content_AS_A_CHILD = content_AS_A_CHILD.concat(data_C.Strengths_100_content_AS_A_CHILD);
      content_AS_A_FRIEND = content_AS_A_FRIEND.concat(data_C.Strengths_100_content_AS_A_FRIEND);
      content_AS_A_COMMITTED_COMPANION = content_AS_A_COMMITTED_COMPANION.concat(data_C.Strengths_100_content_AS_A_COMMITTED_COMPANION);


      L_content_AS_AN_INDIVIDUAL = L_content_AS_AN_INDIVIDUAL.concat(data_C.Limitations_100_content_AS_AN_INDIVIDUAL);
      L_content_AS_A_COMMUNICATOR = L_content_AS_A_COMMUNICATOR.concat(data_C.Limitations_100_content_AS_A_COMMUNICATOR);
      L_content_AS_A_GOAL_SETTER = L_content_AS_A_GOAL_SETTER.concat(data_C.Limitations_100_content_AS_A_GOAL_SETTER);
      L_content_AS_A_CAREER_PERSON = L_content_AS_A_CAREER_PERSON.concat(data_C.Limitations_100_content_AS_A_CAREER_PERSON);
      L_content_AS_A_PARENT = L_content_AS_A_PARENT.concat(data_C.Limitations_100_content_AS_A_PARENT);
      L_content_AS_A_CHILD = L_content_AS_A_CHILD.concat(data_C.Limitations_100_content_AS_A_CHILD);
      L_content_AS_A_FRIEND = L_content_AS_A_FRIEND.concat(data_C.Limitations_100_content_AS_A_FRIEND);
      L_content_AS_A_COMMITTED_COMPANION = L_content_AS_A_COMMITTED_COMPANION.concat(data_C.Limitations_100_content_AS_A_COMMITTED_COMPANION);

    }
    if (JSON.stringify(code2).includes("D")) {


      content_Intro = content_Intro.concat(data_D.Intro_content);
      content_AS_AN_INDIVIDUAL = content_AS_AN_INDIVIDUAL.concat(data_D.Strengths_100_content_AS_AN_INDIVIDUAL);
      content_AS_A_COMMUNICATOR = content_AS_A_COMMUNICATOR.concat(data_D.Strengths_100_content_AS_A_COMMUNICATOR);
      content_AS_A_GOAL_SETTER = content_AS_A_GOAL_SETTER.concat(data_D.Strengths_100_content_AS_A_GOAL_SETTER);
      content_AS_A_CAREER_PERSON = content_AS_A_CAREER_PERSON.concat(data_D.Strengths_100_content_AS_A_CAREER_PERSON);
      content_AS_A_PARENT = content_AS_A_PARENT.concat(data_D.Strengths_100_content_AS_A_PARENT);
      content_AS_A_CHILD = content_AS_A_CHILD.concat(data_D.Strengths_100_content_AS_A_CHILD);
      content_AS_A_FRIEND = content_AS_A_FRIEND.concat(data_D.Strengths_100_content_AS_A_FRIEND);
      content_AS_A_COMMITTED_COMPANION = content_AS_A_COMMITTED_COMPANION.concat(data_D.Strengths_100_content_AS_A_COMMITTED_COMPANION);

      title_Limitations = titles.Limitations;
      L_content_AS_AN_INDIVIDUAL = L_content_AS_AN_INDIVIDUAL.concat(data_D.Limitations_100_content_AS_AN_INDIVIDUAL);
      L_content_AS_A_COMMUNICATOR = L_content_AS_A_COMMUNICATOR.concat(data_D.Limitations_100_content_AS_A_COMMUNICATOR);
      L_content_AS_A_GOAL_SETTER = L_content_AS_A_GOAL_SETTER.concat(data_D.Limitations_100_content_AS_A_GOAL_SETTER);
      L_content_AS_A_CAREER_PERSON = L_content_AS_A_CAREER_PERSON.concat(data_D.Limitations_100_content_AS_A_CAREER_PERSON);
      L_content_AS_A_PARENT = L_content_AS_A_PARENT.concat(data_D.Limitations_100_content_AS_A_PARENT);
      L_content_AS_A_CHILD = L_content_AS_A_CHILD.concat(data_D.Limitations_100_content_AS_A_CHILD);
      L_content_AS_A_FRIEND = L_content_AS_A_FRIEND.concat(data_D.Limitations_100_content_AS_A_FRIEND);
      L_content_AS_A_COMMITTED_COMPANION = L_content_AS_A_COMMITTED_COMPANION.concat(data_D.Limitations_100_content_AS_A_COMMITTED_COMPANION);

    }
  }
  else if (len === 50) {
    if (JSON.stringify(code2).includes("A")) {

      content_Intro = content_Intro.concat(data_A.Intro_content);

      content_AS_AN_INDIVIDUAL = content_AS_AN_INDIVIDUAL.concat(data_A.Strengths_50_content_AS_AN_INDIVIDUAL);
      content_AS_A_COMMUNICATOR = content_AS_A_COMMUNICATOR.concat(data_A.Strengths_50_content_AS_A_COMMUNICATOR);
      content_AS_A_GOAL_SETTER = content_AS_A_GOAL_SETTER.concat(data_A.Strengths_50_content_AS_A_GOAL_SETTER);

      L_content_AS_AN_INDIVIDUAL = L_content_AS_AN_INDIVIDUAL.concat(data_A.Limitations_50_content_AS_AN_INDIVIDUAL);
      L_content_AS_A_COMMUNICATOR = L_content_AS_A_COMMUNICATOR.concat(data_A.Limitations_50_content_AS_A_COMMUNICATOR);
      L_content_AS_A_GOAL_SETTER = L_content_AS_A_GOAL_SETTER.concat(data_A.Limitations_50_content_AS_A_GOAL_SETTER);


    }
    if (JSON.stringify(code2).includes("B")) {

      content_Intro = content_Intro.concat(data_B.Intro_content);

      content_AS_AN_INDIVIDUAL = content_AS_AN_INDIVIDUAL.concat(data_B.Strengths_50_content_AS_AN_INDIVIDUAL);
      content_AS_A_COMMUNICATOR = content_AS_A_COMMUNICATOR.concat(data_B.Strengths_50_content_AS_A_COMMUNICATOR);
      content_AS_A_GOAL_SETTER = content_AS_A_GOAL_SETTER.concat(data_B.Strengths_50_content_AS_A_GOAL_SETTER);


      L_content_AS_AN_INDIVIDUAL = L_content_AS_AN_INDIVIDUAL.concat(data_B.Limitations_50_content_AS_AN_INDIVIDUAL);
      L_content_AS_A_COMMUNICATOR = L_content_AS_A_COMMUNICATOR.concat(data_B.Limitations_50_content_AS_A_COMMUNICATOR);
      L_content_AS_A_GOAL_SETTER = L_content_AS_A_GOAL_SETTER.concat(data_B.Limitations_50_content_AS_A_GOAL_SETTER);

    }
    if (JSON.stringify(code2).includes("C")) {


      content_Intro = content_Intro.concat(data_C.Intro_content);

      content_AS_AN_INDIVIDUAL = content_AS_AN_INDIVIDUAL.concat(data_C.Strengths_50_content_AS_AN_INDIVIDUAL);
      content_AS_A_COMMUNICATOR = content_AS_A_COMMUNICATOR.concat(data_C.Strengths_50_content_AS_A_COMMUNICATOR);
      content_AS_A_GOAL_SETTER = content_AS_A_GOAL_SETTER.concat(data_C.Strengths_50_content_AS_A_GOAL_SETTER);


      L_content_AS_AN_INDIVIDUAL = L_content_AS_AN_INDIVIDUAL.concat(data_C.Limitations_50_content_AS_AN_INDIVIDUAL);
      L_content_AS_A_COMMUNICATOR = L_content_AS_A_COMMUNICATOR.concat(data_C.Limitations_50_content_AS_A_COMMUNICATOR);
      L_content_AS_A_GOAL_SETTER = L_content_AS_A_GOAL_SETTER.concat(data_C.Limitations_50_content_AS_A_GOAL_SETTER);


    }
    if (JSON.stringify(code2).includes("D")) {


      content_Intro = content_Intro.concat(data_D.Intro_content);

      content_AS_AN_INDIVIDUAL = content_AS_AN_INDIVIDUAL.concat(data_D.Strengths_50_content_AS_AN_INDIVIDUAL);
      content_AS_A_COMMUNICATOR = content_AS_A_COMMUNICATOR.concat(data_D.Strengths_50_content_AS_A_COMMUNICATOR);
      content_AS_A_GOAL_SETTER = content_AS_A_GOAL_SETTER.concat(data_D.Strengths_50_content_AS_A_GOAL_SETTER);


      L_content_AS_AN_INDIVIDUAL = L_content_AS_AN_INDIVIDUAL.concat(data_D.Limitations_50_content_AS_AN_INDIVIDUAL);
      L_content_AS_A_COMMUNICATOR = L_content_AS_A_COMMUNICATOR.concat(data_D.Limitations_50_content_AS_A_COMMUNICATOR);
      L_content_AS_A_GOAL_SETTER = L_content_AS_A_GOAL_SETTER.concat(data_D.Limitations_50_content_AS_A_GOAL_SETTER);


    }
  }
  content_Strengths = content_Strengths.concat(content_AS_AN_INDIVIDUAL);
  content_Strengths = content_Strengths.concat(content_AS_A_COMMUNICATOR);
  content_Strengths = content_Strengths.concat(content_AS_A_GOAL_SETTER);
  content_Strengths = content_Strengths.concat(content_AS_A_CAREER_PERSON);
  content_Strengths = content_Strengths.concat(content_AS_A_PARENT);
  content_Strengths = content_Strengths.concat(content_AS_A_CHILD);
  content_Strengths = content_Strengths.concat(content_AS_A_FRIEND);
  content_Strengths = content_Strengths.concat(content_AS_A_COMMITTED_COMPANION);

  content_Limitations = content_Limitations.concat(L_content_AS_AN_INDIVIDUAL);
  content_Limitations = content_Limitations.concat(L_content_AS_A_COMMUNICATOR);
  content_Limitations = content_Limitations.concat(L_content_AS_A_GOAL_SETTER);
  content_Limitations = content_Limitations.concat(L_content_AS_A_CAREER_PERSON);
  content_Limitations = content_Limitations.concat(L_content_AS_A_PARENT);
  content_Limitations = content_Limitations.concat(L_content_AS_A_CHILD);
  content_Limitations = content_Limitations.concat(L_content_AS_A_FRIEND);
  content_Limitations = content_Limitations.concat(L_content_AS_A_COMMITTED_COMPANION);

  return (<>
    <div className="justify-center items-center  mx-auto my-auto  h-5">
</div>
      <div className=" flex justify-center flex-col w-[80%] mx-auto border-2 border-solid border-light_bg_subnav dark:border-dark_bg_subnav rounded-lg p-5   ">


        <AccordionItem
          key={0}
          question={title_Intro}
          answer={content_Intro}
          isOpen={activeIndex === 0}
          onClick={() => handleItemClick(0)}
        />
        <AccordionItem
          key={1}
          question={title_Strengths}
          answer={content_Strengths}
          isOpen={activeIndex === 1}
          onClick={() => handleItemClick(1)}
        />
        <AccordionItem
          key={2}
          question={title_Limitations}
          answer={content_Limitations}
          isOpen={activeIndex === 2}
          onClick={() => handleItemClick(2)}
        />
      </div>
    </>);
}