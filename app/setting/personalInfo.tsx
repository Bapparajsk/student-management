import { ScreenContent } from '@/components/ui/ScreenContent';
import { CampusAssistantCard, PersonalDetailsCard } from "components/setting/personalInfo";

const header = {
    backButton: {
        showBackButton: true,
        title: "Personal Info"
    }
}

export default function PersonalInfoScreen() {
    return (
        <ScreenContent path='/setting/personalInfo' header={header}>
            <CampusAssistantCard />
            <PersonalDetailsCard />
        </ScreenContent>
    )
}