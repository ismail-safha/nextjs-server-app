import Head from 'next/head'
import styles from '../styles/Home.module.css'

// ===>run in server
import Link from 'next/link'
// send data to srver use getServerSideProps
export async function getServerSideProps(){
    // fetch data  from server 
    const url = "http://localhost:5000/courses"
    const res = await fetch(url)
    const data = await res.json(url)
    return {
        props: {
            courses: data?.courses
        }
      }

}
// ====>run in client
export default function Home (props){
    const {courses} = props;
    return (
        
    <>
    <Head>
        <title>Courser</title>
        <meta name='description' content='our beautiful courses'/>
    </Head>
       
        <div className="app" >
            <h1 className={styles.title}>courses</h1>
            <div className={styles.main}> 
                {
                    courses &&  courses.map((c, i)=>{
                        return(
                            <div className="" key={i}>
                            <h3 className={styles.heading}>
                                <Link href={`/${c.id}`}>{c.title}</Link>
                                </h3>
                        </div>
                        )
                        
                    })
                }
            </div>
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