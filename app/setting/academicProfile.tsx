import { ScreenContent } from '@/components/ui/ScreenContent';
import { AcademicHeroCard, AcademicRecordsCard, AcademicStatsGrid } from "components/setting/academicProfile";

const header = {
    backButton: {
        showBackButton: true,
        title: "Academic Profile"
    }
}

export default function AcademicProfileScreen() {
    return (
        <ScreenContent path='/setting/academicProfile' header={header}>
            <AcademicHeroCard />
            <AcademicStatsGrid />
            <AcademicRecordsCard />
        </ScreenContent>
    )
}