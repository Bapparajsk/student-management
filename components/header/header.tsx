import { Surface } from '../hero-ui';
import { HeaderLeftComponent, HeaderProps } from './leftHeader';
import { HeaderRightComponent } from './rightHeader';

const Header = ({ backButton, pathName }: HeaderProps) => {
    return (
        <Surface className="flex-row w-full items-center justify-between p-2 bg-[#1a1a2b] border border-white/5 mb-3">
            {/* left item */}
            <HeaderLeftComponent backButton={backButton} pathName={pathName} />

            {/* right item */}
            <HeaderRightComponent />
        </Surface>
    );
};

export { Header };
