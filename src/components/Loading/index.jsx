import styles from "./Loading.module.css";

const index = () => {
  return (
    // Membuat komponen loading untuk menampilkan pesan loading dalam proses loading data dari backend
    <div className={styles.container}>
      <div className={styles.loader} />
    </div>
  );
};

export default index;
