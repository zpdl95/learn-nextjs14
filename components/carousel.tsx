'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/carousel.module.css';
import { useEffect, useRef, useState } from 'react';
import DragCarousel from '../utils/dragCarousel';

export default function Carousel({ datas }) {
  const [dragCarousel, _] = useState(new DragCarousel().setDeceleration(0.97));
  const [uiDragging, setUiDragging] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener('mousemove', (e) =>
      dragCarousel.dragging(e, ref.current)
    );
    document.addEventListener('mouseup', (e) =>
      dragCarousel.dragEnd(setUiDragging, ref.current)
    );

    return () => {
      document.removeEventListener('mousemove', (e) =>
        dragCarousel.dragging(e, ref.current)
      );
      document.removeEventListener('mouseup', () =>
        dragCarousel.dragEnd(setUiDragging, ref.current)
      );
    };
  }, []);

  if (datas[0].credit_id) {
    return (
      <ul
        ref={ref}
        className={`${styles.carousel} ${uiDragging && styles.dragging}`}
        onMouseDown={(e) =>
          dragCarousel.dragStart(e, setUiDragging, ref.current)
        }
      >
        {datas.map((c, idx) => (
          <li key={`${c.id + idx}`} className={styles.item}>
            {c.profile_path ? (
              <figure className={styles.img}>
                <Image fill src={c.profile_path} alt={c.name} />
              </figure>
            ) : (
              <span></span>
            )}
            <div>
              <p className={styles.name}>{c.name}</p>
              <p className={styles.character}>{c.character}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <ul
        ref={ref}
        className={`${styles.carousel} ${uiDragging && styles.dragging}`}
        onMouseDown={(e) =>
          dragCarousel.dragStart(e, setUiDragging, ref.current)
        }
      >
        {datas.map((c, idx) => (
          <li key={`${c.id} + ${idx}`} className={styles.item}>
            {c.poster_path ? (
              <figure className={styles.img}>
                <Image fill src={c.poster_path} alt={c.name} />
              </figure>
            ) : (
              <span></span>
            )}
            <div>
              <p className={styles.name}>
                <Link href={`/movies/${c.id}`}>{c.title}</Link>
              </p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
