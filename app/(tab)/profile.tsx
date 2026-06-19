import { AcademicOverview, AIAcademicPulseCard, DegreeProgressCard, ProfileHeroCard, UniversityInfoCard } from '@/components/profile'
import { ScreenContent } from '@/components/ui/ScreenContent'

export default function ProfileScreen() {
    return (
        <ScreenContent path='(tab)/profile' bottomBarHeight={80}>
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
                // connections={124}
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
        </ScreenContent>
    )
}