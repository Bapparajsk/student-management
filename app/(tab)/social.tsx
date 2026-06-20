import { SocialNavigation } from '@/components/social';
import { ScreenContent } from '@/components/ui/ScreenContent';

export default function SocialScreen() {
    return (
        <ScreenContent path='(tab)/social' bottomBarHeight={80}>
            <SocialNavigation />
        </ScreenContent>
    )
}


