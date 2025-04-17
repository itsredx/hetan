import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MemberShowcase from "@/components/member-showcase"
import HeroSection from "@/components/hero-section"
import SectionContainer from "@/components/section-container"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <SectionContainer id="about" title="About HETAN Kano Chapter">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            The Home Economics Teachers Association of Nigeria (HETAN) - Kano Chapter is a professional body dedicated
            to promoting excellence in Home Economics education throughout Kano State. Our chapter brings together
            dedicated educators who are passionate about improving the quality of Home Economics teaching and learning
            in our schools.
          </p>
          <p className="text-muted-foreground">
            As a chapter, we work collaboratively to enhance professional development, share best practices, and
            advocate for the importance of Home Economics in developing essential life skills for our students. Our
            members are committed to preparing the next generation with practical knowledge that improves quality of
            life and promotes sustainable living practices.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer id="objectives" title="Objectives of HETAN" className="bg-muted/50">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="text-lg font-medium">Professional Development</h3>
              <p className="text-muted-foreground">
                To promote the professional growth of Home Economics teachers through workshops, seminars, and
                conferences.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="text-lg font-medium">Curriculum Enhancement</h3>
              <p className="text-muted-foreground">
                To contribute to the development and improvement of Home Economics curriculum at all educational levels.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="text-lg font-medium">Research Promotion</h3>
              <p className="text-muted-foreground">
                    To foster the advancement and dissemination of scholarly inquiry and research within Home Economics education and its interconnected fields.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="text-lg font-medium">Collaboration</h3>
              <p className="text-muted-foreground">
                To foster collaboration among Home Economics teachers and with other educational stakeholders.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="text-lg font-medium">Advocacy</h3>
              <p className="text-muted-foreground">
                To advocate for the importance of Home Economics education in schools and communities.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="text-lg font-medium">Resource Sharing</h3>
              <p className="text-muted-foreground">
                To facilitate the sharing of teaching resources, methodologies, and best practices among members.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="activities" title="Activities of HETAN">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/2">
              <Image
                src="/images/activity-1.jpg"
                alt="HETAN workshop session"
                width={960}
                height={540}
                className="rounded-lg object-cover w-full h-auto shadow-md"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-xl font-semibold">Professional Development Programs</h3>
              <p className="text-muted-foreground">
                We organize regular workshops, seminars, and training sessions to enhance the teaching skills and
                subject knowledge of our members. These programs cover various aspects of Home Economics including
                nutrition, textiles, family resource management, and teaching methodologies.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="md:w-1/2">
              <Image
                src="/images/activity-2.jpg"
                alt="HETAN community outreach"
                width={960}
                height={540}
                className="rounded-lg object-cover w-full h-auto shadow-md"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-xl font-semibold">Community Outreach</h3>
              <p className="text-muted-foreground">
                Our chapter engages in community service projects that apply Home Economics principles to address local
                needs. These include nutrition education programs, sustainable living workshops, and skills development
                initiatives for youth and women.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/2">
              <Image
                src="/images/activity-3.jpg"
                alt="HETAN annual conference"
                width={960}
                height={540}
                className="rounded-lg object-cover w-full h-auto shadow-md"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-xl font-semibold">Annual Conference</h3>
              <p className="text-muted-foreground">
                We host an annual conference that brings together Home Economics educators from across Kano State to
                share research findings, discuss challenges, and explore innovative teaching approaches. The conference
                also features exhibitions of student work and teaching resources.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="importance" title="Importance of HETAN" className="bg-muted/50">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Educational Excellence</h3>
            <p className="text-muted-foreground">
              HETAN plays a crucial role in maintaining and improving the standards of Home Economics education in Kano
              State. Through our professional development initiatives, we help teachers stay updated with current trends
              and best practices in the field.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Life Skills Development</h3>
            <p className="text-muted-foreground">
              By supporting Home Economics teachers, HETAN indirectly contributes to equipping students with essential
              life skills related to nutrition, family living, consumer education, and resource management that are
              vital for personal and family wellbeing.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Community Impact</h3>
            <p className="text-muted-foreground">
              Through our community outreach programs, HETAN extends the benefits of Home Economics education beyond the
              classroom, addressing practical needs in local communities and promoting sustainable living practices.
            </p>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="showcase" title="Member Showcase">
        <MemberShowcase />
      </SectionContainer>

      <Footer />
    </main>
  )
}
