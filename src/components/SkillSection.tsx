import styles from "./styles/SkillSection.module.css";
import CotactBtn from "./ContactBtn";

const SkillSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h2 className={styles.title}>Kontakt Oss</h2>
        <div>
          <div className={styles.text}>
            <p>
              Har dere en app, en nettside eller et internt verktøy dere aldri
              har fått tid til? Da vil vi gjerne høre fra dere.
            </p>

            <p>
              <strong>Vi har erfaring med blant annet:</strong>
            </p>

            <ul>
              <li>
                <strong>Språk:</strong> C, C#, Java, Swift og TypeScript
              </li>
              <li>
                <strong>Rammeverk:</strong> .NET, Spring Boot, React, Jetpack
                Compose og Tailwind CSS
              </li>
              <li>
                <strong>Data og meldingskøer:</strong> MySQL, Kafka og RabbitMQ
              </li>
              <li>
                <strong>Sky og DevOps:</strong> AWS, Docker og GitHub
              </li>
              <li>
                <strong>Design:</strong> Figma
              </li>
            </ul>

            <p>
              Er dere usikre på om prosjektet passer? Ta kontakt for en
              uforpliktende prat.
            </p>

            <h3>
              Vil dere vite mer om ordningen? Se{" "}
              <a
                href="https://www.kristiania.no/arbeidsliv/bachelorprosjekt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kristianias side om bachelorprosjektet
              </a>
              .
            </h3>
          </div>
        </div>
        <CotactBtn />
      </div>
    </section>
  );
};

export default SkillSection;
