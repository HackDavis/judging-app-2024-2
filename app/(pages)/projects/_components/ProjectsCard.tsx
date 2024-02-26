'use client';

// import Category from './Category';
import styles from './ProjectsCard.module.scss';

export default function ProjectsCard() {
  const project = {
    num: 1,
    name: 'sc haptic hand',
    categories: ['Technical', 'Beginner', 'another category'],
  };

  const renderCategory = (category: string) => {
    return <div className={styles.category}>{category}</div>;
  };

  const extraCategories = (extra: number) => {
    return <div className={styles.extra}>{extra}+</div>;
  };

  const renderCategories = (categories: string[]) => {
    const size: number = categories.length;
    if (size == 0) {
      return <></>;
    } else if (size == 1) {
      return (
        <div className={styles.categoriesContainer}>
          {/* <Category category={categories[0]} />; */}
          {renderCategory(categories[0])}
        </div>
      );
    } else if (size == 2) {
      return (
        <div className={styles.categoriesContainer}>
          {renderCategory(categories[0])}
          {renderCategory(categories[1])}
        </div>
      );
    } else if (size > 2) {
      return (
        <div className={styles.categoriesContainer}>
          {renderCategory(categories[0])}
          {renderCategory(categories[1])}
          {extraCategories(size - 2)}
        </div>
      );
    }
    return <></>;
  };
  return (
    <div className={styles.card}>
      <div className={styles.teamNumber}>{project.num}</div>
      <div className={styles.text}>
        <div className={styles.teamName}>{project.name} </div>
        {/* <div>
          {project.categories.map((category, index) => {
            <Category key={index} category={category} />;
          })}
        </div> */}
        <div>{renderCategories(project.categories)}</div>
      </div>
    </div>
  );
}
