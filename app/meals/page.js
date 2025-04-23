import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import React, { Suspense } from "react";
import { getMeals } from "@/lib/meals";

 async function Meals (){
  const meals =  await getMeals();
  return      <MealsGrid meals={meals} />
}


const MealsPage = () => {
  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>{" "}
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share"> Share your Favorite Recipe </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={ <p className={classes.loading}>Fetching Meals...</p>}>

        <Meals />
        </Suspense>
      </main>
 
    </>
  );
};

export default MealsPage;
