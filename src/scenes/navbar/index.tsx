// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

// import { Profile } from '../../components/profile/Profile';
import { Asset } from '@/assets/Asset';
import Logo from '@/assets/Logo.png';
import { Profile } from '@/components/profile/Profile';
import { sum } from '@/helpers/functions';

// import { Asset } from '@assets/Asset';
// import { Profile } from '@components/profile/Profile';
// import Logo from '@assets/Logo.png';
// import { sum } from '@helpers/functions';

// import Logo from '../../assets/Logo.png';

type Props = { dummy: string };

function Navbar(props: Props) {
  const { dummy } = props;

  const flexBetween = 'flex items-center justify-between';

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        Something {dummy}
      </div>
    </nav>
  );
}

export default Navbar;
