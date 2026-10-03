import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

import logo from './assets/logo.png'
import leadership from './assets/leadership.jpg'
import clinical from './assets/clinical-training.jpg'
import ceremony from './assets/ceremony.jpg'
import leadership2 from './assets/leadership-2.jpg'
import simulation from './assets/simulation-lab.jpg'

const departments = [
  ['01','Anatomy','Basic sciences'],['02','Physiology','Basic sciences'],
  ['03','Biochemistry','Basic sciences'],['04','Pharmacology','Basic sciences'],
  ['05','Microbiology','Basic sciences'],['06','Pathology','Basic & clinical'],
  ['07','General Medicine','Clinical'],['08','General Surgery','Clinical'],
  ['09','Anesthesiology','Clinical'],['10','Ophthalmology','Clinical'],
  ['11','Radio-Diagnosis','Clinical'],['12','Dermatology (DVL)','Clinical'],
  ['13','Forensic Medicine','Medical sciences'],['14','Community Medicine','Public health']
]

function App(){
  const [page,setPage] = useState('home')
  const [menu,setMenu] = useState(false)
  const [filter,setFilter] = useState('all')
  const [search,setSearch] = useState('')

  const go = p => { setPage(p); setMenu(false); window.scrollTo({top:0,behavior:'smooth'}) }

  const nav = ['home','about','academics','departments','research','events','gallery','contact']

  return <>
    <header>
      <div className="topbar"><div className="container"><span>Hemwati Nandan Bahuguna Uttarakhand Medical Education University</span><span>Dehradun, Uttarakhand · Digital Concept</span></div></div>
      <nav className="navbar">
        <div className="container nav-inner">
          <button className="brand" onClick={()=>go('home')}>
            <img src={logo} alt="HNBUMU logo"/>
            <span>HNBUMU <small>Medical Department</small></span>
          </button>
          <div className="nav-links">{nav.map(n=><button className={page===n?'active':''} onClick={()=>go(n)} key={n}>{n[0].toUpperCase()+n.slice(1)}</button>)}</div>
          <button className="menu-btn" onClick={()=>setMenu(!menu)}>☰</button>
        </div>
        {menu && <div className="mobile-nav">{nav.map(n=><button onClick={()=>go(n)} key={n}>{n[0].toUpperCase()+n.slice(1)}</button>)}</div>}
      </nav>
    </header>

    {page==='home' && <Home go={go} />}
    {page==='about' && <About go={go} />}
    {page==='academics' && <Academics go={go} />}
    {page==='departments' && <Departments filter={filter} setFilter={setFilter} search={search} setSearch={setSearch}/>}
    {page==='research' && <Research />}
    {page==='events' && <Events />}
    {page==='gallery' && <Gallery />}
    {page==='contact' && <Contact />}

    <footer className="footer">
      <div className="container footer-grid">
        <div><h3>HNBUMU Medical Department</h3><p>Modern presentation for medical education, research, people and institutional achievements.</p></div>
        <div><h3>Explore</h3>{['about','academics','departments','research'].map(n=><button onClick={()=>go(n)} key={n}>{n[0].toUpperCase()+n.slice(1)}</button>)}</div>
        <div><h3>Discover</h3>{['events','gallery','contact'].map(n=><button onClick={()=>go(n)} key={n}>{n[0].toUpperCase()+n.slice(1)}</button>)}</div>
        <div><h3>Official</h3><a href="https://www.hnbumu.ac.in/" target="_blank">Main University Website ↗</a><a href="https://www.instagram.com/hnbumu2026/" target="_blank">Instagram ↗</a><a href="https://x.com/vchnbumu" target="_blank">X ↗</a></div>
      </div>
      <div className="container footer-bottom"><span>© HNBUMU · Department digital concept</span><span>Verify all official content before publication.</span></div>
    </footer>
  </>
}

const Hero=({go})=><section className="hero"><div className="container hero-grid"><div className="reveal">
  <div className="eyebrow">HNBUMU · Medical Education</div><h1>Where <em>medical education</em> meets purpose.</h1>
  <p>A contemporary digital home for academic excellence, medical learning, research, people and institutional stories.</p>
  <div className="actions"><button className="btn primary" onClick={()=>go('about')}>Explore the Department →</button><a className="btn light" href="https://www.hnbumu.ac.in/" target="_blank">Official University ↗</a></div>
  <div className="stat-grid"><div><b>01</b><span>Academic excellence</span></div><div><b>02</b><span>Research & innovation</span></div><div><b>03</b><span>Service & leadership</span></div></div>
</div><div className="hero-media"><div className="hero-photo"><img src={leadership}/></div><div className="hero-card"><small>Department focus</small><strong>Learning to serve. Building the future of healthcare.</strong></div></div></div></section>

function Home({go}){return <main><Hero go={go}/>
<section className="section"><div className="container split"><div className="image-card"><img src={clinical}/></div><div className="copy"><div className="kicker">A new digital chapter</div><h2>Make the institution easier to discover.</h2><p>This concept transforms important academic and institutional information into a modern, student-friendly experience while keeping the main university website as the authoritative source for official notices and services.</p><p>Use this space for the department's approved introduction, vision, leadership message and key priorities.</p><button className="btn primary" onClick={()=>go('about')}>Meet the department →</button></div></div></section>
<section className="section band"><div className="container"><div className="section-head"><div><div className="kicker">What lives here</div><h2>One department.<br/>Many stories.</h2></div><p>Organize the digital experience around people, academics, research, events and achievements.</p></div><div className="cards"><Card n="01" t="Academics" d="Courses, learning pathways, academic resources and department information."/><Card n="02" t="People" d="Faculty, leadership, mentors and the people shaping medical education."/><Card n="03" t="Research" d="Publications, projects, collaborations, conferences and innovation stories."/></div></div></section>
<section className="section"><div className="container"><div className="section-head"><div><div className="kicker">Academic ecosystem</div><h2>Explore disciplines.</h2></div><button className="btn light" onClick={()=>go('departments')}>View all →</button></div><div className="department-grid">{departments.slice(0,4).map(d=><button className="dept" key={d[1]} onClick={()=>go('departments')}><span className="num">{d[0]}</span><div><h3>{d[1]}</h3><p>{d[2]}</p></div></button>)}</div></div></section>
<section className="section-sm"><div className="container"><div className="section-head"><div><div className="kicker">From the campus</div><h2>Moments that matter.</h2></div><button className="btn light" onClick={()=>go('gallery')}>Open gallery →</button></div><div className="gallery"><img className="tall" src={simulation}/><img src={ceremony}/><img src={leadership2}/><img className="wide" src={clinical}/></div></div></section>
</main>}

function Card({n,t,d}){return <div className="card"><div className="card-icon">{n}</div><h3>{t}</h3><p>{d}</p></div>}

function PageHero({k,title,desc}){return <section className="page-hero"><div className="container"><div className="breadcrumb">HNBUMU / {k}</div><div className="kicker">{k}</div><h1 dangerouslySetInnerHTML={{__html:title}}/><p>{desc}</p></div></section>}

function About({go}){return <main><PageHero k="About the department" title="A modern window into<br/>medical education." desc="Use this page for the approved department profile, vision, mission, leadership message and institutional journey."/><section className="section"><div className="container profile"><img src={leadership}/><div><div className="kicker">Leadership</div><h2>Leadership with a purpose.</h2><b className="role">Head of Medical Department</b><p className="quote">“Insert the approved message from the Head of Department here. Keep the final version official, concise and attributable.”</p><p>This layout gives the department a strong human identity without turning the site into a generic corporate template.</p><button className="btn primary" onClick={()=>go('contact')}>Department contact →</button></div></div></section><section className="section band"><div className="container"><div className="section-head"><div><div className="kicker">Our direction</div><h2>Education. Research.<br/>Service.</h2></div><p>Replace these concept statements with the university-approved vision, mission and values.</p></div><div className="cards"><Card n="E" t="Education" d="Build strong foundations in medical knowledge, skills and professional practice."/><Card n="R" t="Research" d="Encourage inquiry, evidence and responsible innovation across disciplines."/><Card n="S" t="Service" d="Connect medical learning with service, ethics and the needs of society."/></div></div></section></main>}

function Academics(){return <main><PageHero k="Academics" title="Learning designed<br/>for real impact." desc="Present programmes, academic resources and learning pathways in a clean structure that students can actually navigate."/><section className="section"><div className="container cards"><Card n="01" t="Medical Education" d="Present approved undergraduate and postgraduate medical education information with direct links to official university resources."/><Card n="02" t="Clinical Learning" d="Showcase approved clinical training environments, simulation, practical learning and academic activities."/><Card n="03" t="Academic Resources" d="Organize syllabi, calendars, regulations, notices and useful links without overwhelming the visitor."/></div></section><section className="section band"><div className="container split"><div className="copy"><div className="kicker">Clinical learning</div><h2>From classroom<br/>to clinical practice.</h2><p>Use authentic approved photography to make the learning environment visible to prospective students.</p></div><div className="image-card"><img src={simulation}/></div></div></section></main>}

function Departments({filter,setFilter,search,setSearch}){const filtered=departments.filter(d=>(filter==='all'||(filter==='basic'&&d[2].toLowerCase().includes('basic'))||(filter==='clinical'&&d[2].toLowerCase().includes('clinical')))&&d[1].toLowerCase().includes(search.toLowerCase()));return <main><PageHero k="Academic departments" title="Explore the disciplines<br/>behind medicine." desc="A searchable, scalable directory that can grow as the department provides verified information."/><section className="section"><div className="container"><div className="searchbox"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search departments, specialties or topics…"/></div><div className="filterbar">{[['all','All'],['basic','Basic sciences'],['clinical','Clinical']].map(x=><button className={'filter '+(filter===x[0]?'active':'')} onClick={()=>setFilter(x[0])} key={x[0]}>{x[1]}</button>)}</div><div className="department-grid">{filtered.map(d=><button className="dept" key={d[1]}><span className="num">{d[0]}</span><div><h3>{d[1]}</h3><p>{d[2]}</p></div></button>)}</div></div></section></main>}

function Research(){return <main><PageHero k="Research & innovation" title="Ideas that move<br/>medicine forward." desc="Turn publications, projects, collaborations and conferences into a discoverable research story."/><section className="section"><div className="container split"><div className="copy"><div className="kicker">Research ecosystem</div><h2>Make research visible.</h2><p>Instead of burying research inside long documents, create clear pathways for publications, projects, investigators, collaborations and academic events.</p><div className="cards"><Card n="R1" t="Publications" d="Searchable list with year, department, authors and approved links."/><Card n="R2" t="Projects" d="Research themes, active projects and approved summaries."/></div></div><div className="image-card"><img src={clinical}/></div></div></section></main>}

function Events(){return <main><PageHero k="Events & news" title="What’s happening<br/>across the department." desc="A modern event feed designed to connect the website with Instagram, LinkedIn, Facebook and official announcements."/><section className="section"><div className="container timeline">{[[leadership,'Academic & institutional gathering'],[clinical,'Clinical learning session'],[simulation,'Simulation & practical learning']].map((e,i)=><article className="event" key={e[1]}><img src={e[0]}/><div className="event-body"><div className="event-date">Featured · Replace date</div><h3>{e[1]}</h3><p>Use approved event details, speakers, location and registration information here.</p></div></article>)}</div></section></main>}

function Gallery(){return <main><PageHero k="Campus gallery" title="People. Places.<br/>Moments." desc="A visual layer that gives prospective students and the wider community a feeling for the institution."/><section className="section"><div className="container"><div className="gallery"><img className="tall" src={leadership}/><img src={clinical}/><img src={ceremony}/><img className="wide" src={simulation}/><img src={leadership2}/><img src={clinical}/></div><div className="notice">These are the photographs supplied for the concept. Before public launch, replace or confirm each image through the university's authorized content process.</div></div></section></main>}

function Contact(){return <main><PageHero k="Connect" title="Start a conversation<br/>with the department." desc="Keep this page simple, official and action-oriented, with verified contact details and direct links to university resources."/><section className="section"><div className="container contact-grid"><div className="contact-card"><h3>Department contact</h3><div className="contact-item"><small>Address</small><div>HNBUMU, Dehradun, Uttarakhand</div></div><div className="contact-item"><small>Email</small><div>Use the department's verified official email</div></div><div className="contact-item"><small>Phone</small><div>Use the verified official contact number</div></div></div><div className="contact-card"><h3>Digital channels</h3><p>Connect the department's digital hub to the university's approved social channels.</p><div className="actions"><a className="btn primary" href="https://www.instagram.com/hnbumu2026/" target="_blank">Instagram ↗</a><a className="btn light" href="https://x.com/vchnbumu" target="_blank">X ↗</a></div><div className="notice">Official URLs, contact details and department information should be verified before publication.</div></div></div></section></main>}

createRoot(document.getElementById('root')).render(<App/>)
