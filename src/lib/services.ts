import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  importance: string;
  crucialRole: string;
  howWeHelp: string;
  details: string;
  image: ImagePlaceholder;
  deliverables: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const services: Service[] = [
  {
    slug: 'resume-writing',
    title: 'Resume Writing',
    shortDescription: 'Craft a compelling, professional resume that stands out to recruiters and lands you interviews. We tailor your resume to your target roles.',
    importance: 'A strong resume is your first impression. In a competitive job market, a well-crafted resume is essential to get noticed by hiring managers and applicant tracking systems (ATS).',
    crucialRole: 'It plays a crucial role by summarizing your skills, experience, and accomplishments in a concise and impactful way, convincing recruiters that you are the right fit for the job.',
    howWeHelp: 'JCC will pair you with an expert consultant who will work with you to draw out your key achievements and skills. We then craft a narrative that presents you as the ideal candidate, optimized with keywords to pass through automated screening systems and catch the eye of a human reader.',
    details: 'Our resume writing service includes a one-on-one consultation to understand your career goals, a professionally written resume tailored to your target industry, keyword optimization for ATS, and a cover letter template. We ensure your resume highlights your unique strengths and achievements.',
    image: PlaceHolderImages.find(p => p.id === 'resume-writing')!,
    deliverables: [
      'A professionally written, keyword-optimized resume (PDF & Word formats)',
      'A tailored and editable cover letter template',
      'A one-on-one strategy session with an expert consultant',
      'A final document that is ready for Applicant Tracking Systems (ATS)',
    ],
    process: [
      { step: 1, title: 'Discovery Consultation', description: 'We start with a deep dive into your career history, skills, and future aspirations to understand your unique story.' },
      { step: 2, title: 'First Draft & Strategy', description: 'Our experts craft the first version of your new resume and cover letter, establishing a powerful narrative.' },
      { step: 3, title: 'Review & Refine', description: 'We collaborate with you to review the draft, gathering your feedback to make precise adjustments.' },
      { step: 4, title: 'Final Delivery', description: 'You receive the polished, finalized documents, ready to make an impact on your job applications.' },
    ],
    faq: [
      { question: 'What is an ATS and why is it important?', answer: 'An Applicant Tracking System (ATS) is software used by recruiters to scan resumes for keywords. We optimize your resume to ensure it passes these automated screenings.' },
      { question: 'How long does the resume writing process take?', answer: 'Typically, the entire process takes between 5-7 business days, including consultation, drafting, and revisions, to ensure a high-quality result.' },
    ],
  },
  {
    slug: 'linkedin-profile-building',
    title: 'LinkedIn Profile Building',
    shortDescription: "Optimize your LinkedIn profile to attract opportunities. We'll help you build a powerful personal brand and expand your professional network.",
    importance: "LinkedIn is the world's largest professional network. A strong profile makes you visible to recruiters and helps you build a professional brand that can open doors to new opportunities.",
    crucialRole: 'It serves as your digital professional identity, showcasing your expertise, building credibility, and allowing you to connect with industry leaders and potential employers.',
    howWeHelp: "We'll transform your LinkedIn profile into a powerful career tool. Our experts will optimize every section—from your headline to your experience—to ensure you're found by the right people. We will also craft a compelling summary that tells your professional story.",
    details: 'We will optimize your LinkedIn headline, summary, and experience sections with relevant keywords. We will also guide you on how to get meaningful recommendations, grow your network strategically, and engage with content to increase your visibility.',
    image: PlaceHolderImages.find(p => p.id === 'linkedin-profile')!,
    deliverables: [
        'A fully optimized LinkedIn profile including headline, summary, and experience.',
        'A professional branding strategy to attract recruiters.',
        'Guidance on strategic networking and content engagement.',
        'A personalized banner image recommendation.',
    ],
    process: [
        { step: 1, title: 'Profile Audit', description: 'We analyze your current profile to identify areas for improvement and align it with your career goals.' },
        { step: 2, title: 'Content Crafting', description: 'We rewrite your profile sections to be compelling, professional, and rich with industry-specific keywords.' },
        { step: 3, title: 'Optimization & Review', description: 'We implement the changes and review the updated profile with you to ensure it reflects your personal brand.' },
        { step: 4, title: 'Strategy Session', description: 'We provide you with a clear action plan for growing your network and increasing your visibility on the platform.' },
    ],
    faq: [
        { question: 'Do I need to give you my LinkedIn password?', answer: 'No, we do not require your login credentials. We provide you with the optimized content in a document, which you can then copy and paste into your profile.' },
        { question: 'How will this help me get a job?', answer: 'An optimized profile ranks higher in recruiter searches, clearly communicates your value, and establishes your credibility, significantly increasing your inbound opportunities.' },
    ],
  },
  {
    slug: 'interview-prep',
    title: 'Interview Prep',
    shortDescription: 'Gain the confidence to ace any interview. Our mock interviews and personalized feedback will prepare you for success.',
    importance: 'An interview is your chance to shine and prove you are the best candidate. Proper preparation is key to handling tough questions with confidence and making a lasting positive impression.',
    crucialRole: 'Effective interview prep allows you to articulate your thoughts clearly, demonstrate your skills with compelling examples using the STAR method, and show genuine interest in the company and role.',
    howWeHelp: "JCC's interview prep provides you with tailored mock interview sessions based on the roles you're targeting. We provide detailed, actionable feedback on your answers, body language, and overall delivery. We'll equip you with frameworks like the STAR method to structure compelling stories about your accomplishments.",
    details: 'Our interview prep includes mock interviews simulating real-world scenarios, personalized feedback on your answers and body language, and strategies for answering common and behavioral questions. We also help you prepare insightful questions to ask the interviewer.',
    image: PlaceHolderImages.find(p => p.id === 'interview-prep')!,
    deliverables: [
        'One-on-one mock interview sessions tailored to your target roles.',
        'Detailed, actionable feedback on your performance.',
        'Mastery of the STAR method for answering behavioral questions.',
        'A list of insightful questions to ask your interviewers.',
    ],
    process: [
        { step: 1, title: 'Initial Assessment', description: 'We discuss your target roles and any specific interview challenges you face.' },
        { step: 2, title: 'Mock Interview', description: 'We conduct a realistic mock interview simulating the pressure and format of a real one.' },
        { step: 3, title: 'Feedback & Coaching', description: 'We provide immediate, constructive feedback on your answers, communication style, and body language.' },
        { step: 4, title: 'Refinement Session', description: 'A follow-up session allows you to practice and refine your approach based on the feedback received.' },
    ],
    faq: [
        { question: 'What kind of interviews do you prepare for?', answer: 'We cover all types, including behavioral, technical, case study, and panel interviews across a wide range of industries.' },
        { question: 'Are the sessions recorded?', answer: 'Yes, with your permission, we can record the sessions so you can review your performance and track your improvement.' },
    ],
  },
  {
    slug: 'campus-to-corporate',
    title: 'Campus to Corporate',
    shortDescription: 'Smoothly transition from student life to the corporate world. We provide essential skills and guidance for a successful start to your career.',
    importance: 'The transition from academia to the corporate environment can be challenging. Understanding corporate etiquette, communication styles, and expectations is vital for a successful start.',
    crucialRole: 'This program bridges the gap between theoretical knowledge and practical workplace skills, equipping you with the confidence and competence to navigate your new professional life effectively.',
    howWeHelp: 'JCC provides a structured program to ease your transition. Through workshops and one-on-one coaching, we cover the unwritten rules of the corporate world, from professional email etiquette to navigating office politics. We provide you with a mentor who can guide you through your first months on the job.',
    details: 'Our program covers topics like professional communication, time management, teamwork and collaboration, understanding corporate culture, and setting career goals. We provide practical workshops and one-on-one mentorship.',
    image: PlaceHolderImages.find(p => p.id === 'campus-to-corporate')!,
    deliverables: [
        'A comprehensive understanding of corporate culture and etiquette.',
        'Actionable strategies for effective professional communication.',
        'Personalized mentorship for your first 90 days.',
        'A clear plan for setting and achieving early career goals.',
    ],
    process: [
        { step: 1, title: 'Goal Setting', description: 'We help you define what success looks like in your first corporate role.' },
        { step: 2, title: 'Core Skills Workshop', description: 'We conduct interactive sessions on key topics like communication, time management, and office politics.' },
        { step: 3, title: 'Mentorship Pairing', description: 'We pair you with an experienced professional who provides guidance and support.' },
        { step: 4, title: '90-Day Check-in', description: 'We meet to review your progress, address challenges, and refine your career strategy.' },
    ],
    faq: [
        { question: 'Is this for students or recent graduates?', answer: 'This program is ideal for final-year students, recent graduates, and professionals in the first year of their corporate career.' },
        { question: 'Is the mentorship ongoing?', answer: 'The formal mentorship part of the program lasts for your first 90 days, a critical period for setting a positive trajectory in a new role.' },
    ],
  },
  {
    slug: 'presentation-skills',
    title: 'Presentation Skills',
    shortDescription: 'Deliver impactful presentations with confidence. Our training covers everything from slide design to public speaking techniques.',
    importance: 'Whether you are presenting to a client, a team, or at a conference, the ability to communicate your ideas clearly and persuasively is a critical skill for career advancement.',
    crucialRole: 'Strong presentation skills enable you to influence decisions, inspire action, and establish yourself as a credible and authoritative voice in your field.',
    howWeHelp: "Our presentation skills coaching focuses on both content and delivery. We'll help you structure a compelling narrative, design clean and effective slides, and master your stage presence. Through recorded practice sessions and personalized feedback, you'll learn to deliver your message with impact and confidence.",
    details: 'Our training focuses on structuring a compelling narrative, designing visually appealing slides, mastering body language and vocal delivery, and handling Q&A sessions with poise. You will get to practice and receive constructive feedback in a supportive environment.',
    image: PlaceHolderImages.find(p => p.id === 'presentation-skills')!,
    deliverables: [
        'A polished presentation deck template.',
        'Techniques for managing speaking anxiety.',
        'Coaching on powerful body language and vocal delivery.',
        'Recorded practice sessions with expert feedback.',
    ],
    process: [
        { step: 1, title: 'Content Strategy', description: 'We work with you to structure your message for maximum clarity and impact.' },
        { step: 2, title: 'Design & Visuals', description: 'We guide you in creating a slide deck that supports, rather than distracts from, your message.' },
        { step: 3, title: 'Delivery Coaching', description: 'Through practice runs, we coach you on pacing, tone, body language, and audience engagement.' },
        { step: 4, title: 'Q&A Preparation', description: 'We prepare you to handle questions with confidence and authority.' },
    ],
    faq: [
        { question: 'Can you help with a specific upcoming presentation?', answer: 'Absolutely. We can tailor our coaching to help you prepare for a specific high-stakes presentation.' },
        { question: 'I have a fear of public speaking. Can you help?', answer: 'Yes. A core part of our coaching is providing techniques and building confidence to manage and overcome speaking anxiety.' },
    ],
  },
  {
    slug: 'email-writing',
    title: 'Email Writing',
    shortDescription: 'Master the art of professional email communication. Learn to write clear, concise, and effective emails for any business context.',
    importance: 'Email remains a primary mode of communication in the business world. Poorly written emails can lead to misunderstandings, project delays, and a negative professional image.',
    crucialRole: 'Professional email writing ensures your messages are understood, respected, and acted upon. It is a fundamental skill for building relationships and maintaining efficiency at work.',
    howWeHelp: "JCC's email writing workshop provides practical, hands-on training. We'll teach you proven formulas for writing effective emails for various situations—from a simple request to a complex project update. You'll learn to be clear, concise, and professional, ensuring your emails get the results you want.",
    details: 'We teach you the principles of effective email writing, including subject lines that get noticed, clear and concise body content, appropriate tone and etiquette, and structuring emails for action. We provide templates and exercises for various business scenarios.',
    image: PlaceHolderImages.find(p => p.id === 'email-writing')!,
    deliverables: [
        'A set of professional email templates for common business scenarios.',
        'Mastery of tone and etiquette for professional correspondence.',
        'Skills to write clear, concise, and actionable emails.',
        'Strategies for managing your inbox effectively.',
    ],
    process: [
        { step: 1, title: 'Needs Analysis', description: 'We assess your current email writing habits and identify key areas for improvement.' },
        { step: 2, title: 'Core Principles Workshop', description: 'We teach you the fundamental rules of effective business communication, from subject lines to sign-offs.' },
        { step: 3, title: 'Scenario-Based Practice', description: 'You will practice writing emails for different real-world scenarios and receive expert feedback.' },
        { step: 4, title: 'Template Creation', description: 'We help you build a personal library of email templates to save time and improve consistency.' },
    ],
    faq: [
        { question: 'Is this for native English speakers only?', answer: 'Not at all. This workshop is beneficial for everyone, including non-native speakers who want to communicate more confidently and professionally in English.' },
        { question: 'How can I get my team to write better emails?', answer: 'We offer group workshops for corporate teams, which can be customized to address your organization\'s specific communication challenges.' },
    ],
  },
];
