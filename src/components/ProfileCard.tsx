import { useState } from "react";
import type { MouseEvent } from "react";

import type { Profile } from "../interfaces/profile";
import styles from "./styles/ProfileCard.module.css";

interface ProfileCardProps {
  profile: Profile;
  isOpen: boolean;
  onClick: () => void;
}

const ProfileCard = ({ profile, isOpen, onClick }: ProfileCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      className={`${styles.card} ${isOpen ? styles.open : ""}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {isHovered && !isOpen && (
        <div
          className={styles.clickHint}
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        >
          trykk meg
        </div>
      )}

      <img className={styles.image} src={profile.image} alt={profile.name} />

      <div className={styles.content}>
        {!isOpen && (
          <>
            <h3 className={styles.name}>{profile.name}</h3>
            <p className={styles.study}>{profile.study}</p>
          </>
        )}

        {isOpen && (
          <div className={styles.moreInfo}>
            <h3 className={styles.name}>
              {profile.fullName}, {profile.age}
            </h3>
            <h4 className={styles.study}>{profile.study}</h4>
            <p className={styles.description}>{profile.description}</p>
            {/*TODO skal vi ha dette som egne bokser eller inne her?*/}
            <div className={styles.links}>
              {profile.linkedin && (
                  <a
                      className={styles.linkBtn}
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                  >
                    <img src="/icons/linkedin.png" alt="" /> <span className={styles.linkText}>LinkedIn</span>
                  </a>
              )}
              {profile.github && (
                  <a
                      className={styles.linkBtn}
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                  >
                    <img src="/icons/github.svg" alt="" /> <span className={styles.linkText}>GitHub</span>
                  </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
