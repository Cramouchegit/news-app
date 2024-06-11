import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./NewsCard.module.css";
import { formatDate } from "../../utils/formatDate";

/**
 * Component untuk menampilkan news card.
 * Component ini menerima beberapa props, yaitu:
 * - src: URL gambar thumbnail dari news
 * - title: judul dari news
 * - publishedAt: tanggal publikasi dari news
 * - author: penulis dari news
 * - sourceName: nama sumber dari news
 * - description: deskripsi dari news
 * - url: URL dari news
 * - notLastChild: boolean untuk menentukan apakah komponen ini adalah komponen terakhir dalam array atau tidak
 */

const NewsCard = ({
  src,
  title,
  publishedAt,
  author,
  sourceName,
  description,
  url,
  notLastChild,
}) => {
  return (
    // Membuat komponen news card
    <>
      <div
        // Menambahkan class dari styles.newsCard dan styles.newsCardGap jika notLastChild bernilai true
        className={classnames(styles.newsCard, {
          [styles.newsCardGap]: notLastChild,
        })}
      >
        <div className={styles.imgContainer}>
          {/* Menampilkan gambar thumbnail dari news */}
          <img
            className={styles.img}
            src={src}
            alt={`${title} thumbnail img`}
          />
          <p className={styles.imgTitle}>{title}</p>
        </div>

        {/* Menampilkan tanggal publikasi dari news */}
        <div className={styles.newsCardContent}>
          {/* Menampilkan penulis dari news dan nama sumber dari news */}
          <p className={styles.newsCardDate}>{formatDate(publishedAt)}</p>
          <p className={styles.newsCardAuthor}>{`${author} | ${sourceName}`}</p>

          {/* Menampilkan deskripsi dari api news */}
          <p className={styles.newsCardDesc}>{description}</p>
          {/* Menampilkan link untuk menampilkan artikel secara lengkap */}
          <a
            className={styles.url}
            href={url}
            target="_blank"
            rel="noreferrer noopener"
          >
            Go To Article
          </a>
        </div>
      </div>
    </>
  );
};

NewsCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  publishedAt: PropTypes.string,
  author: PropTypes.string,
  sourceName: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  notLastChild: PropTypes.bool,
};

export default NewsCard;
