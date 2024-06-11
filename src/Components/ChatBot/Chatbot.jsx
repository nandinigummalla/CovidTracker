import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
function Chatbot(props) {
  const config = {
    width: "350px",
    height: "500px",
    floating: true
  };

  const theme = {
    background: "white",
    fontFamily: "cursive",
    headerBgColor: "#00B2B2",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#00B2B2",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c"
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello Welcome to our page. How can I help you",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "Please type your name?",
      trigger: "Waiting user input for name"
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "username"
    },
    {
      id: "username",
      message: "Hi {previousValue},We are pleased to solve your queries",
      trigger: "Further details"
    },

    {
      id: "Further details",
      message: "Select the queries related about covid",
      trigger: "covid options"
    },
    {
      id: "covid options",
      options: [
        {
          value: "precautions",
          label: "precautions",
          trigger: "covid precautions"
        },
        {
          value: "symptoms",
          label: "symptoms",
          trigger: "covid symptoms"
        },
        {
          value: "hospitals",
          label: "hospitals",
          trigger: "covid hospitals"
        },
        {
          value: "No query",
          label: "No query",
          trigger: "Done"
        }

      ]
    },
    {
      id: "covid precautions",
      message: "Prevention is better than cure..    Be safe and avoid covid.Some of the precautions to follow are   Regular Handwashing, Wearing mask, maintaining social distance , Covering mouth and nose when coughing and sneezing",
      trigger: "covid options without precautions"
    },
    {
      id: "covid options without precautions",
      options: [
        {
          value: "symptoms",
          label: "symptoms",
          trigger: "covid symptoms"
        },
        {
          value: "hospitals",
          label: "hospitals",
          trigger: "covid hospitals"
        },
        {
          value: "No query",
          label: "No query",
          trigger: "Done"
        }

      ]
    },
    {
      id: "covid symptoms",
      message: "some of the symptoms when covid19 affected are Fever, Fatigue,  A dry cough, Cold, Sore throat, Loss of taste, Loss of appetite, Body aches, Shortness of breath, Mucus or phlegm,  ",
      trigger: "covid options without symptoms"
    },
    {
      id: "covid options without symptoms",
      options: [
        {
          value: "precautions",
          label: "precautions",
          trigger: "covid precautions"
        },
        {
          value: "hospitals",
          label: "hospitals",
          trigger: "covid hospitals"
        },
        {
          value: "No query",
          label: "No query",
          trigger: "Done"
        }

      ]
    },

    {
      id: "covid hospitals",
      message: "Hospitals treating covid19 in each state are as follows...Andaman and Nicobar Islands:GMC Andhra Pradesh: Sri Venkateswara Institute of Medical Sciences Arunachal Pradesh: TRIHMS Assam: Gauhati Medical College Bihar: Rajendra Memorial Research Institute of Medical Sciences Chandigarh: Post Graduate Institute of Medical Education & Research Chhattisgarh: OM hospital Dadra and Nagar Haveli and Daman and Diu  Delhi: All India Institute Medical Sciences Goa: Apollo hospital Gujarat: BJ Medical College Haryana: Pt.B.D.Sharma Post Graduate Inst.of Med.Sciences Himachal Pradesh: Indira Gandhi Medical College      Jammu and Kashmir: Sher - e - Kashmir Institute of Medical Sciences Jharkhand: MGM Medical College Karnataka: Bangalore Medical College & Research Institute Kerala: National Institute of Virology Field Unit Ladakh: Mahabodhi Karuna Charitable Hospital Lakshadweep: Transit accommodation Madhya Pradesh: All India Institute Medical Sciences Maharashtra: Indira Gandhi Government Medical College Manipur: J N Inst.of Med.Sciences Hospital Meghalaya: NEIGRI of Health and Medical Sciences Mizoram: Lawngtlai district hspital Nagaland: District Hospital, Dimapur Odisha: Regional Medical Research Center Puducherry: Jawaharlal Institute of Postgraduate Medical Education & Research Punjab: Government Medical College Rajasthan: Sawai Man Singh  Sikkim: STNM Hospital  Tamil Nadu: King's Institute of Preventive Medicine & Research Telengana: Gandhi Medical College Tripura: Government Medical College Uttarakhand: Government Medical College Uttar Pradesh: King's George Medical University  West Bengal: National Institute of Cholera and Enteric Diseases",
      trigger: "covid options without hospitals"
    },
    {
      id: "covid options without hospitals",
      options: [
        {
          value: "precautions",
          label: "precautions",
          trigger: "covid precautions"
        },
        {
          value: "symptoms",
          label: "symptoms",
          trigger: "covid symptoms"
        },
        {
          value: "No query",
          label: "No query",
          trigger: "Done"
        }

      ]
    },
    {
      id: "Done",
      message: "Thank you..Have a great day Friend!!",
      end: true
    }
  ];
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>

  )
}
export default Chatbot;
