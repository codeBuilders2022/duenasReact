import styles from "./CardMap.module.scss";
import copyIcon from "../mapsImg/copyIcon.svg";
import linkIcon from "../mapsImg/linkIcon.svg";
import Image from "next/image";

const CardMap = ({
    price,
    imgCard,
    colony,
    municipality,
    location,
    soil,
    date,
    invoice,
    proficient,
}) => {
    return (
        <div className={styles.infoMap}>
            <Image className={styles.imgMain} src={imgCard} alt=""/>
            <div className={styles.iconLink}>
                <Image src={linkIcon} alt=""/>
            </div>

            <div className={styles.code}>
                <p>
                    Valor por m2: <span>{price}</span>
                </p>
                <Image src={copyIcon} alt=""/>
            </div>
            <div className={styles.data}>
                <p>
                    Colonia: <strong>{colony}</strong>
                </p>
                <p>
                    Municipio: <strong>{municipality}</strong>
                </p>
                <p>
                    Ubicación: <strong>{location}</strong>
                </p>
                <p>
                    Uso de suelo: <strong>{soil}</strong>
                </p>
                <p>
                    Fecha de valuación: <strong>{date}</strong>
                </p>
                <p>
                    Folio de avalúo: <strong>{invoice}</strong>
                </p>
                <p>
                    Perito: <strong>{proficient}</strong>
                </p>
            </div>
        </div>
    );
};

export default CardMap;
