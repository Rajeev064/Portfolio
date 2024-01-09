import React, { useState } from "react";
import "./styles.css";

function Timeline() {
  return (
    <div className="-my-6 p-4" id="workex">
      <div className="mb-8 mt-8">
        <h1 className="text-4xl font-bold text-indigo-600">Work Experience</h1>
        <div className="h-1 w-20 bg-indigo-600 mt-2"></div>
      </div>
      <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
          ASML, Boise, Idaho
        </div>
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 hover:after:scale-125">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-10 pl-3 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full hover:bg-indigo-500 hover:text-black">
            May'24 - Aug'24
          </time>
          <div className="text-xl font-bold text-slate-900">
            Upcoming Customer/Program Support Engineer (Engineering, Optics or
            Physics) Intern
          </div>
        </div>
        <div className="text-slate-500">As an Incoming Customer/Program Support Engineer Intern at ASML for Summer 2024, I will be responsible for developing software aimed at mitigating risks associated with the development of Lithography machines within the team.</div>
      </div>
      <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
          MIDAS Lab IIIT-Delhi, Delhi, India
        </div>
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 hover:after:scale-125">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-10 pl-3 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full hover:bg-indigo-500 hover:text-black">
            Aug'21 - Jan'23
          </time>
          <div className="text-xl font-bold text-slate-900">
            Research Assistant
          </div>
        </div>
        <div className="text-slate-500">
          <p className="text-gray-700 mb-4">
            Developing a solution for the client GS1 India which extracts
            information such as nutrition values, FSSAI, etc. from consumable
            products using image processing techniques, Regex, and OCR Engines
            to separate images on the basis of quality.
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li>Created an Anomaly detection technique which flags the field with abnormal OCR data extracted from the Food Wrapper Images.</li>
            <li>Designed a binning technique which categorises the image on the basis of quality and data extracted through OCR engine. </li>
            <li>Optimized the back end system upto 30%, giving the results in 2 seconds per image.</li>
            <li>Deployed the machine learning models on Client's Azure VM to utilise it as an API.</li>
            <li>Installed a cron job on the server for compressing the image size without much loss.</li>
            <li>Developed a model for text localisation on Scientific Paper using the S2ORC dataset.</li>
          <li>Learned and implemented various Adversarial attack techniques like PGD, FGSM, EOTPGD on Scientific paper.</li>
            
          </ul>

          <p className="text-gray-700">
            Technologies Used: 
            <b>
                Python, Azure, Flask, Cron Job, Machine Learning, Pandas, Numpy,
              Matplotlib, Regex, Jira, Object Detection
            </b>
          </p>
        </div>
      </div>

      <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
          Cerebranium, Berlin, Germany
        </div>
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 hover:after:scale-125">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-10 pl-3 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full hover:bg-indigo-500 hover:text-black">
            Aug'21 - Nov'21
          </time>
          <div className="text-xl font-bold text-slate-900">
            Machine Learning Intern
          </div>
        </div>
        <div className="text-slate-500">
          <p className="text-gray-700 mb-4">
            Designed a system which predicts whether the student is cheating
            during the exams by studying the behavior of the student from system
            log files.
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li>
              Created a machine learning model from scratch and end-to-end from
              data extraction to model deployment on AWS VM.
            </li>
            <li>
              Prepared the dataset from the user log files generated and
              conducted hypothesis testing on various assumptions.
            </li>
            <li>
              Implemented various Feature selection and extraction techniques
              and implemented a Random Forest Model with hyper parameter tuning
              on the dataset to get an accuracy of 84%.
            </li>
            <li>
              Designed an auto-training system which trains the model every 15
              days in order to improve the accuracy of the model.
            </li>
          </ul>

          <p className="text-gray-700">
            Technologies Used:
            <b>
              Python, AWS, Flask, Cron Job, Machine Learning, Pandas, Numpy,
              Matplotlib, Tableau, Hypothesis Testing
            </b>
          </p>
        </div>
      </div>
      <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
          Vidyalankar Institute of Technology, Mumbai, India
        </div>
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 hover:after:scale-125">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-10 pl-3 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full hover:bg-indigo-500 hover:text-black">
            May'24 - Aug'24
          </time>
          <div className="text-xl font-bold text-slate-900">
            Summer Intern (Computer Vision)
          </div>
        </div>
        <div className="text-slate-500">
          <p className="text-gray-700 mb-4">
            Developed a Social Distancing Monitoring System system using OpenCV
            and Haar Cascades to monitor social distancing compliance in
            real-time.
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li>Implemented OpenCV for video frame analysis.</li>
            <li>Utilized Haar Cascades for object detection.</li>
            <li>
              Developed an algorithm for calculating distances between
              individuals.
            </li>
            <li>Integrated an alert system for admin notifications.</li>
            <li>
              Enhanced user experience with error sounds and location details
              for detected crowds.
            </li>
          </ul>

          <p className="text-gray-700">
            Technologies Used: <b>OpenCV, Haar Cascades, Python</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
// import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
// import {
//   TimelineConnector,
//   TimelineContent,
//   TimelineDot,
//   TimelineItem,
//   TimelineOppositeContent,
//   TimelineSeparator,
// } from "@mui/lab";
// import { Typography } from "@mui/material";
// import React from "react";

// const TimelineCard = () => {
//   return (
//     <TimelineItem>
//       <TimelineOppositeContent
//         sx={{ m: "auto 0" }}
//         align="right"
//         variant="body2"
//         color="text.secondary"
//       >
//         9:00 AM
//       </TimelineOppositeContent>
//       <TimelineSeparator>
//         <TimelineConnector />
//         <TimelineDot>
//           <FreeBreakfastIcon />
//         </TimelineDot>
//         <TimelineConnector />
//       </TimelineSeparator>
//       <TimelineContent>
//         <Typography>Eat Breakfast</Typography>
//         <Typography color="text.secondary">Eggs and Bacon</Typography>
//       </TimelineContent>
//     </TimelineItem>
//   );
// };

// export default TimelineCard;
