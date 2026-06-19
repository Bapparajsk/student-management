import { AcademicOverview, ActivityTimeline, AIAcademicPulseCard, BadgeGallery, DegreeProgressCard, ProfessionalReadinessCard, ProfileHeroCard, QuickActionsGrid, UniversityInfoCard } from '@/components/profile';
import { ScreenContent } from '@/components/ui/ScreenContent';

export default function ProfileScreen() {
    return (
        <ScreenContent path='(tab)/profile'>
            <ProfileHeroCard
                name="Bapparaj Sk"
                role="Full Stack Developer"
                program="BCA"
                semester="4"
                avatar="https://i.pravatar.cc/300?img=12"
                coverImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                status="Excellent Standing"
                cgpa="8.7"
                streak={14}
                rank="#12"
                achievements={124}
            />
            <AcademicOverview />
            <DegreeProgressCard />
            <AIAcademicPulseCard />
            <UniversityInfoCard
                universityName="XYZ University"
                campus="North Campus • Block A-42"
                department="Computer Science"
                advisor="Dr. Helena Vance"
                logo="https://your-logo-url.com/logo.png"
            />
            <ProfessionalReadinessCard
                placementScore={82}
                resumeScore={94}
                interviewScore={78}
                dsaScore={85}
                skills={[
                    'React.js',
                    'Next.js',
                    'Node.js',
                    'TypeScript',
                    'MongoDB',
                    'AWS',
                    'Docker',
                    'GraphQL',
                ]}
            />
            <ActivityTimeline
                activities={[
                    {
                        id: '1',
                        type: 'payment',
                        title: 'Semester Fee Paid',
                        description:
                            'Semester 5 tuition fee payment successful.',
                        time: '2h ago',
                    },
                    {
                        id: '2',
                        type: 'batch',
                        title: 'New Batch Unlocked',
                        description:
                            'Advanced React Native batch is now available.',
                        time: 'Yesterday',
                    },
                    {
                        id: '3',
                        type: 'achievement',
                        title: 'Achievement Earned',
                        description:
                            'Completed a 30-day study streak.',
                        time: '2 days ago',
                    },
                    {
                        id: '4',
                        type: 'exam',
                        title: 'Exam Result Published',
                        description:
                            'Operating Systems result has been published.',
                        time: '4 days ago',
                    },
                    {
                        id: '5',
                        type: 'certificate',
                        title: 'Certificate Issued',
                        description:
                            'Web Development certificate is ready to download.',
                        time: '1 week ago',
                    },
                ]}
            />
            <BadgeGallery />
            <QuickActionsGrid />
        </ScreenContent>
    )
}