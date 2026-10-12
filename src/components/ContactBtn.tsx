import style from "./styles/ContacBtn.module.css";

const CotactBtn = () => {
  const handleEmailClick = () => {
    const epost = "fabi001@student.kristiania.no";
    const emne = "Vi har bachelor prosjekt til dere";

    window.location.href = `mailto:${epost}?subject=${encodeURIComponent(emne)}`;
  };

  return (
    <>
      <div className={style.button} onClick={handleEmailClick}>
        <>Kontakt Oss</>
      </div>
    </>
  );
};

export default CotactBtn;
