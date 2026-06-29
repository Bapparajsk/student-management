import { ScreenContent } from '@/components/ui/ScreenContent';

const header = {
    backButton: {
        showBackButton: true,
        title: "Academic Profile"
    }
}

export default function AcademicProfileScreen() {
    return (
        <ScreenContent path='/setting/academicProfile' header={header}>

        </ScreenContent>
    )
}