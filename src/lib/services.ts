import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  importance: string;
  crucialRole: string;
  details: string;
  image: ImagePlaceholder;
}

export const services: Service[] = [
  {
    slug: 'resume-writing',
    title: 'Resume Writing',
    shortDescription: 'Craft a compelling, professional resume that stands out to recruiters and lands you interviews. We tailor your resume to your target roles.',
    importance: 'A strong resume is your first impression. In a competitive job market, a well-crafted resume is essential to get noticed by hiring managers and applicant tracking systems (ATS).',
    crucialRole: 'It plays a crucial role by summarizing your skills, experience, and accomplishments in a concise and impactful way, convincing recruiters that you are the right fit for the job.',
    details: 'Our resume writing service includes a one-on-one consultation to understand your career goals, a professionally written resume tailored to your target industry, keyword optimization for ATS, and a cover letter template. We ensure your resume highlights your unique strengths and achievements.',
    image: PlaceHolderImages.find(p => p.id === 'resume-writing')!,
  },
  {
    slug: 'linkedin-profile-building',
    title: 'LinkedIn Profile Building',
    shortDescription: "Optimize your LinkedIn profile to attract opportunities. We'll help you build a powerful personal brand and expand your professional network.",
    importance: 'LinkedIn is the world\'s largest professional network. A strong profile makes you visible to recruiters and helps you build a professional brand that can open doors to new opportunities.',
    crucialRole: 'It serves as your digital professional identity, showcasing your expertise, building credibility, and allowing you to connect with industry leaders and potential employers.',
    details: 'We will optimize your LinkedIn headline, summary, and experience sections with relevant keywords. We will also guide you on how to get meaningful recommendations, grow your network strategically, and engage with content to increase your visibility.',
    image: PlaceHolderImages.find(p => p.id === 'linkedin-profile')!,
  },
  {
    slug: 'interview-prep',
    title: 'Interview Prep',
    shortDescription: 'Gain the confidence to ace any interview. Our mock interviews and personalized feedback will prepare you for success.',
    importance: 'An interview is your chance to shine and prove you are the best candidate. Proper preparation is key to handling tough questions with confidence and making a lasting positive impression.',
    crucialRole: 'Effective interview prep allows you to articulate your thoughts clearly, demonstrate your skills with compelling examples using the STAR method, and show genuine interest in the company and role.',
    details: 'Our interview prep includes mock interviews simulating real-world scenarios, personalized feedback on your answers and body language, and strategies for answering common and behavioral questions. We also help you prepare insightful questions to ask the interviewer.',
    image: PlaceHolderImages.find(p => p.id === 'interview-prep')!,
  },
  {
    slug: 'campus-to-corporate',
    title: 'Campus to Corporate',
    shortDescription: 'Smoothly transition from student life to the corporate world. We provide essential skills and guidance for a successful start to your career.',
    importance: 'The transition from academia to the corporate environment can be challenging. Understanding corporate etiquette, communication styles, and expectations is vital for a successful start.',
    crucialRole: 'This program bridges the gap between theoretical knowledge and practical workplace skills, equipping you with the confidence and competence to navigate your new professional life effectively.',
    details: 'Our program covers topics like professional communication, time management, teamwork and collaboration, understanding corporate culture, and setting career goals. We provide practical workshops and one-on-one mentorship.',
    image: PlaceHolderImages.find(p => p.id === 'campus-to-corporate')!,
  },
  {
    slug: 'presentation-skills',
    title: 'Presentation Skills',
    shortDescription: 'Deliver impactful presentations with confidence. Our training covers everything from slide design to public speaking techniques.',
    importance: 'Whether you are presenting to a client, a team, or at a conference, the ability to communicate your ideas clearly and persuasively is a critical skill for career advancement.',
    crucialRole: 'Strong presentation skills enable you to influence decisions, inspire action, and establish yourself as a credible and authoritative voice in your field.',
    details: 'Our training focuses on structuring a compelling narrative, designing visually appealing slides, mastering body language and vocal delivery, and handling Q&A sessions with poise. You will get to practice and receive constructive feedback in a supportive environment.',
    image: PlaceHolderImages.find(p => p.id === 'presentation-skills')!,
  },
  {
    slug: 'email-writing',
    title: 'Email Writing',
    shortDescription: 'Master the art of professional email communication. Learn to write clear, concise, and effective emails for any business context.',
    importance: 'Email remains a primary mode of communication in the business world. Poorly written emails can lead to misunderstandings, project delays, and a negative professional image.',
    crucialRole: 'Professional email writing ensures your messages are understood, respected, and acted upon. It is a fundamental skill for building relationships and maintaining efficiency at work.',
    details: 'We teach you the principles of effective email writing, including subject lines that get noticed, clear and concise body content, appropriate tone and etiquette, and structuring emails for action. We provide templates and exercises for various business scenarios.',
    image: PlaceHolderImages.find(p => p.id === 'email-writing')!,
  },
];
