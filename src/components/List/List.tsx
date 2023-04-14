import styles from "./List.module.scss";
import { useMemo } from "react";
import { IAdvertisementItem } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface IAdvertisementItemProps {
  item?: IAdvertisementItem;
  search?: string;
}

function formatPrice(p: number) {
  return p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function List({ item }: IAdvertisementItemProps) {
  const title = useMemo(
    () =>
      item &&
      `${item.location.type} - ${item.location.country} in ${item.location.city}`,
    [item]
  );
  const location = useMemo(
    () =>
      item &&
      `${item.location.vicinity}, ${item.location.city}, ${item.location.country}`,
    [item]
  );

  const rooms = useMemo(
    () => item && `${item.bedrooms} Bedrooms • ${item.bathrooms} Bathrooms`,
    [item]
  );

  const price = useMemo(() => item && formatPrice(item.price), [item]);

  return (
    <div className={styles.container}>
      <div
        style={{ ...(item && { backgroundImage: `url(${item.image})` }) }}
        className={styles.image}
      />
      <div className={styles.listContent}>
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.location}>
          <span>
            <FontAwesomeIcon style={{ marginRight: 10 }} icon={faLocationDot} />{" "}
            {location}
          </span>
          <span style={{ marginTop: 10 }}>{rooms}</span>
        </div>
        <h5 className={styles.price}>
          {"€"} {price}
        </h5>
      </div>
    </div>
  );
}
