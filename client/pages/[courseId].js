import Link from 'next/link'
import Head from 'next/head';
import styles from '../styles/Course.module.css'
// ===>run in server
// send data to srver use getServerSideProps
export async function getServerSideProps(context){
    const {params} = context;
    const id = params.courseId;
    // fetch data  from server 
    const url = `http://localhost:5000/courses/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    return {
        props: {
            course: data?.course
        }
      }

}
// ====>run in client
export default function SingleCourse (props){
    const {course} = props;
    return (
        <>
        <Head>{course.title}</Head>
        <meta name='description' content={course.description} />
        <div >
            Single Course 
            <h1 className={styles.tite}>{course.title}</h1>
            <p>{course.description}</p>
            <Link href='/'> Go home</Link>

        </div>
        </>
    )

}
/* 
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
*/