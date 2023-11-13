import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import aisaas from "../../Assets/Projects/aisaas.png";
import excel from "../../Assets/Projects/Excel.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aisaas}
              isBlog={false}
              title="AI SAAS Full Stack Website"
              description="An AI Website used for having a conversation with AI. You can generate Music, Images, Videos, Codes with the help of AI. This is achieved with the help of OpenAI. Technical Stack - React.js, Next.js, MySQL, OpenAI, Stripe, Prisma, ShadcnUI, Clerk, Tailwind CSS"
              ghLink="https://github.com/SamarthBhatia/SAAS-AI"
              demoLink="https://saas-p9h3547k5-samarthbhatia.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Multiple Disease Prediction"
              description="Constructed an application that assesses an individual's potential risk for diabetes, heart disease, or Parkinson's disease using
              Machine Learning with an 80% detection accuracy. Technical Stack - Support Vector Machine(SVM), Logistic Regression, Scikit-learn, NumPy, Pandas, Streamlit.
              "
              ghLink="https://github.com/SamarthBhatia/MultipleDiseasePredictionModels"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Used Car Price Prediction Model"
              description="Conducted a comprehensive analysis of extensive datasets, including historical car prices, mileage, age, model, and relevant
              attributes. Achieved accuracy in predicting prices with an r2 score of 0.78. Technical Stack - Linear Regression, Flask, JavaScript, Python, NumPy, Pandas, Scikit-learn, Machine Learning."
              ghLink="https://github.com/SamarthBhatia/CarPrice"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={excel}
              isBlog={false}
              title="Cross Platform Excel Clone"
              description="A cross-platform Excel clone refers to spreadsheet software that is designed to work seamlessly across multiple operating systems, allowing users to create, edit, and analyze spreadsheets on different platforms such as Windows, macOS, and Linux. Technical Stack - HTML, CSS, JavaScript, JQuery"
              ghLink="https://github.com/SamarthBhatia/Excel-Clone"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
