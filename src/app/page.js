import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Blog page demo</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eveniet
          laborum laboriosam fuga sit eligendi ad ab vitae quo nulla magni nisi
          sint repellat inventore ut, porro voluptates nihil alias? Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Atque veniam
          consequuntur, inventore maxime aperiam accusamus molestiae optio
          voluptatum vero impedit vitae velit officiis voluptatibus, provident a
          dicta libero recusandae. Tempore amet ut quam pariatur similique
          maxime vitae hic excepturi, totam assumenda expedita dolor deserunt
          fugit delectus cum adipisci eaque culpa!
        </p>
        <Button link={"/about"} text={"Read More"} />
      </div>
      <div className="imgContainer">
        <Image
          className={styles.img}
          src="/homebanner.jpg"
          alt="Vercel Logo"
          width={640}
          height={426}
          priority
        />
      </div>
    </div>
  );
}
