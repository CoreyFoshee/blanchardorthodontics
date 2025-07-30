'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useCMS } from '../../../components/CMSProvider';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { ClientWrapper } from '../../../components/ClientWrapper';

function TeamMemberDetailPageContent() {
  const params = useParams();
  const { teamMembers, getTeamMemberBySlug, convertBlockContentToHTML } = useCMS();
  const [teamMember, setTeamMember] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadTeamMember = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const memberData = await getTeamMemberBySlug(params.slug as string);
        if (memberData) {
          setTeamMember(memberData);
        } else {
          setError('Team member not found');
        }
      } catch (err) {
        setError('Failed to load team member');
        console.error('Error loading team member:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadTeamMember();
  }, [params.slug, getTeamMemberBySlug]);

  if (isLoading) {
    return <div>Loading team member...</div>;
  }

  if (error || !teamMember) {
    return (
      <>
        <Header />
        <div className="container w-container">
          <div className="section-title-area center-align">
            <h1 className="heading-2">Team Member Not Found</h1>
            <p>The team member you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!teamMember) {
    return (
      <>
        <Header />
        <div className="container w-container">
          <div className="section-title-area center-align">
            <h1 className="heading-2">Team Member Not Found</h1>
            <p>The team member you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      {/* Banner Section - Empty as in original */}
      <div className="banner-title-area-section team-single"></div>

      {/* Doctor Single Section */}
      <div className="doctor-single-wrap">
        <div className="container w-container">
          <div className="w-layout-grid doctor-single-grid">
            
            {/* Doctor Image */}
            <img 
              src={teamMember.image?.asset?.url || '/images/webclip.jpg'} 
              loading="lazy" 
              alt={`${teamMember.name} - ${teamMember.title}`}
              className="doctor-single-image"
            />

            {/* Doctor Content */}
            <div>
              <h1 className="doctor-single-name">{teamMember.name}</h1>
              <div className="doctor-member-job">{teamMember.title}</div>
              
              {/* Doctor Meta Information */}
              <div className="doctor-single-meta-wrap">
                <div className="doctor-meta-item first-child">
                  <img src="/images/doctor-zap.svg" loading="lazy" alt="Doctor Single Icon" className="doctor-meta-icon" />
                  <div className="doctor-meta-title">Experience</div>
                  <div className="doctor-meta-value">{teamMember.experience || 'N/A'}</div>
                </div>
                
                <div className="doctor-meta-item">
                  <img src="/images/doctor-user-check.svg" loading="lazy" alt="Doctor Single Icon" className="doctor-meta-icon" />
                  <div className="doctor-meta-title">Patients</div>
                  <div className="doctor-meta-value">{teamMember.patients || 'N/A'}</div>
                </div>
                
                <div className="doctor-meta-item last-child">
                  <img src="/images/doctor-award.svg" loading="lazy" alt="Doctor Single Icon" className="doctor-meta-icon" />
                  <div className="doctor-meta-title">Certification</div>
                  <div className="doctor-meta-value">{teamMember.certifications?.[0] || 'Board Certified'}</div>
                </div>
              </div>

              {/* Doctor Bio */}
              <div className="doctor-single-bio">
                <div 
                  className="full-bio"
                  dangerouslySetInnerHTML={{ __html: convertBlockContentToHTML(teamMember.fullBio) }}
                ></div>
              </div>

              {/* Doctor Quick Links */}
              <div className="doctor-single-quick-links">
                <a href="/appointments" className="button doctor-single-button w-button">make appointment</a>
                <div className="doctor-quicklinks doctor-single-links">
                  <a href={`tel:${teamMember.phone}`} className="contact-link-wrap w-inline-block">
                    <img src="/images/doctor-call.svg" loading="lazy" alt="Doctor Single Icon" />
                  </a>
                  <a href={`mailto:${teamMember.email}`} className="contact-link-wrap w-inline-block">
                    <img src="/images/doctor-mail.svg" loading="lazy" alt="Doctor Single Icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Promise Section */}
      <div className="our-promise-section">
        <div className="container w-container">
          <div className="our-promise-content-area large-width">
            <div className="w-layout-grid doctor-speciality-wrap">
              <ul role="list" className="excellency-list doctor-single-feature w-list-unstyled">
                <li className="unordered-list-item bold">Speciality :</li>
                <li className="unordered-list-item bold">Degrees :</li>
              </ul>
              <div className="doctor-single-speciality-wrap">
                <div className="doctor-single-speciality-text">
                  {teamMember.specialties?.[0] || teamMember.title}
                </div>
                <div 
                  className="doctor-single-speciality-text"
                  dangerouslySetInnerHTML={{ __html: convertBlockContentToHTML(teamMember.education) }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default function TeamMemberDetailPage() {
  return (
    <ClientWrapper>
      <TeamMemberDetailPageContent />
    </ClientWrapper>
  );
} 