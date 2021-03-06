import React from 'react';
import './App.css';


export default function DataEntry(props) {
  const resume = JSON.parse(props.location.state.resume);
  const {work, volunteer, education, awards, skills, publications, interests, references, languages} = resume;
  const {name, label, email, phone, summary, profiles, picture} = resume.basics;
  const {address, city, region, countryCode, postalCode} = resume.basics.location;

  window.scrollTo(0, 0)

  return (
  <div>
    <h1> Your Resume </h1>
    <img className="picture" src={picture} alt="Profile Pic"/>
    <p><strong>{name}</strong></p>
    <p><strong>{label}</strong></p>
    <p><u>Address</u>: {address}, {city}, {region}, {countryCode} {postalCode} </p>
    <p><u>Email</u>: {email}</p>
    <p><u>Phone</u>: {phone}</p>
    {
      profiles.map((profile, index)=>(
        <p key={index}><u>{profile.network}</u>: <a href={profile.url}>{profile.username}</a> </p>
      ))
    }
    <br></br>
    <h2><strong>Summary</strong></h2>
    <p className="summary">{summary}</p>
    <br></br>
    <div className='section'>
      <h2><strong>Work Experience</strong></h2>
      {
        work.map((job, index)=>(
          <div key={index}>
            <div className="header">
            <p>Company: {job.company}</p>
            <p>Website: <a href={job.website}>{job.website}</a></p>
            </div>
            <p>({job.startDate} to {job.endDate}) </p>
            <p>Position: {job.position}</p>
            <p><u>Summary</u></p>
            <p>{job.summary}</p>
            <p><u>Highlights</u></p>
            {job.highlights.map((highlight, index)=>(
              <li key={index}>{highlight}</li>
            ))}
          </div>
        ))
      }
    </div>
    <br></br>
    <div className='section'>
      <h2><strong>Volunteer Experience</strong></h2>
      {
        volunteer.map((job, index)=>(
          <div key={index}>
            <div className="header">
            <p>Organization: {job.organization}</p>
            <p>Website: <a href={job.website}>{job.website}</a></p>
            </div>
            <p>({job.startDate} to {job.endDate}) </p>
            <p>Position: {job.position}</p>
            <p><u>Summary</u></p>
            <p>{job.summary}</p>
            <p><u>Highlights</u></p>
            {job.highlights.map((highlight, index)=>(
              <li key={index}>{highlight}</li>
            ))}

          </div>
        ))
      }
    </div>
    <br></br>
    <div className='section'>
      <h2><strong>Education</strong></h2>
      {
        education.map((school, index)=>(
          <div key={index}>
            <p>Institution: {school.institution}</p>
            <p>({school.startDate} to {school.endDate}) </p>
            <p>Area of Study: {school.area}</p>
            <p>Degree Earned: {school.studyType}</p>
            <p>GPA: {school.gpa}</p>
            <p><u>Courses</u></p>
            {school.courses.map((course, index)=>(
              <li key={index}>{course}</li>
            ))}

          </div>
        ))
      }
    </div>
    <br></br>
    <div className="accomplishments">
      <div className="section">
        <h2><strong>Awards</strong></h2>
        {
          awards.map((award,index)=>(
          <div key={index}>
            <p>Award Title: {award.title}</p>
            <p>Date Earned: {award.date}</p>
            <p>Awarded By: {award.awarder}</p>
            <p><u>Summary</u></p>
            <p>{award.summary}</p>
          </div>
          ))
        }
      </div>
      <br></br>
      <div className="section">
        <h2><strong>Publications</strong></h2>
        {
          publications.map((publication,index)=>(
          <div key={index}>
            <p>Title: {publication.name}</p>
            <p>Publisher: {publication.publisher}</p>
            <p>Release Date: {publication.releaseDate}</p>
            <p>Website: <a href={publication.website}>{publication.website}</a></p>
            <p><u>Summary</u></p>
            <p>{publication.summary}</p>
          </div>
          ))
        }
      </div>
    </div>
    <br></br>
    <div className="supplement">
      <div className="section">
        <h2><strong>Skills</strong></h2>
        {
          skills.map((skill,index)=>(
          <div key={index}>
            <p>Name: {skill.name}</p>
            <p>Level: {skill.level}</p>
            <p><u>Keywords</u></p>
              {skill.keywords.map((keyword, index)=>(
                <li key={index}>{keyword}</li>
              ))}
          </div>
          ))
        }
      </div>
      <div className="section">
        <h2><strong>Languages</strong></h2>
        {
          languages.map((language,index)=>(
          <div key={index}>
            <p>Language: {language.language}</p>
            <p>Proficiency: {language.fluency}</p>
          </div>
          ))
        }
      </div>
      <div className="section">
        <h2><strong>Interests</strong></h2>
        {
          interests.map((interest,index)=>(
          <div key={index}>
            <p>Name: {interest.name}</p>
            <p><u>Keywords</u></p>
              {interest.keywords.map((keyword, index)=>(
                <li key={index}>{keyword}</li>
              ))}
          </div>
          ))
        }
      </div>
    </div>
    <br></br>
    <div className="section">
      <h2><strong>References</strong></h2>
      {
        references.map((reference,index)=>(
        <div key={index}>
          <p>Name: {reference.name}</p>
          <p>Reference: {reference.reference}</p>
        </div>
        ))
      }
    </div>
    <br></br>
  </div>

  )
}