import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTeamMember, getTeamMembers } from '../../../../lib/site-content';
import { descriptionText, pageMetadata } from '../../../../lib/seo';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { RichText } from '../../../components/RichText';

export const revalidate = 120;
type Props = { params: { slug: string } };
export async function generateStaticParams() {
  return (await getTeamMembers()).map(member => ({ slug: member.slug.current }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const member = await getTeamMember(params.slug);
  if (!member) notFound();
  return pageMetadata(`/detail-team/${member.slug.current}`, `${member.name}, Orthodontist | Blanchard Orthodontics`,
    descriptionText(member.bio, `Meet ${member.name} at Blanchard Orthodontics in Tyler and Jacksonville, Texas.`), member.image?.asset?.url);
}
export default async function TeamMemberPage({ params }: Props) {
  const member = await getTeamMember(params.slug);
  if (!member) notFound();
  return <><Header /><main>
    <div className="doctor-single-wrap">
      <div className="container w-container">
        <div className="w-layout-grid doctor-single-grid">
          <img src={member.image?.asset?.url || '/images/webclip.jpg'} alt={`${member.name}, ${member.title}`} className="doctor-single-image" />
          <div>
            <h1 className="doctor-single-name">{member.name}</h1>
            <p className="doctor-member-job">{member.title}</p>
            <div className="doctor-single-meta-wrap">
              {member.experience && <div className="doctor-meta-item"><div className="doctor-meta-title">Experience</div><div className="doctor-meta-value">{member.experience}</div></div>}
              {member.patients && <div className="doctor-meta-item"><div className="doctor-meta-title">Patients</div><div className="doctor-meta-value">{member.patients}</div></div>}
              {!!member.certifications?.length && <div className="doctor-meta-item"><div className="doctor-meta-title">Credentials</div><div className="doctor-meta-value">{member.certifications.join(', ')}</div></div>}
            </div>
            <div className="doctor-single-bio full-bio">
              {member.fullBio?.length ? <RichText value={member.fullBio} /> : <p>{member.bio}</p>}
            </div>
            <div className="repair-actions">
              <a href="/appointments" className="button w-button">Schedule a free consultation</a>
              <a href="tel:+19037076275">Call (903) 707-6275</a>
            </div>
          </div>
        </div>
        {!!member.education?.length && <section className="repair-section"><h2>Education and training</h2><RichText value={member.education} /></section>}
        <section className="repair-section"><h2>Visit Dr. Blanchard in East Texas</h2>
          <p>Find contact information and directions for our <a href="/locations/tyler-tx">Tyler office</a> or our <a href="/locations/jacksonville-tx">Jacksonville office</a>.</p>
        </section>
      </div>
    </div>
  </main><Footer /></>;
}
