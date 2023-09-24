import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import ActionButton from '@/shared/ActionButton';
import HText from '@/shared/HText';
import { BenefitType, SelectedPage } from '@/shared/types';

import Benefit from './Benefit';

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'State of the Art Facilities',
    description:
      'Pharetra et ultrices neque ornare aenean euismod elementum nisi. Curabitur vitae nunc sed velit dignissim sodales ut eu.',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: '100s of Diverse Classes',
    description:
      'Scelerisque felis imperdiet proin fermentum leo. Pellentesque massa placerat duis ultricies lacus sed.',
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Expert and Pro Trainers',
    description:
      'Gravida neque convallis a cras semper auctor neque vitae. Vitae auctor eu augue ut lectus arcu bibendum at.',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({ setSelectedPage }: Props) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            carte into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div
          className="mt-16 items-center justify-between
          gap-20 md:mt-28 md:flex"
        >
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div
                className="before:absolute before:-left-20 before:-top-20
                before:z-[1] before:content-abstractwaves"
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{' '}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Non sodales neque sodales ut etiam sit amet nisl. Erat imperdiet
                sed euismod nisi porta. Sodales neque sodales ut etiam sit amet
                nisl purus. Est placerat in egestas erat imperdiet sed euismod
                nisi. Purus in mollis nunc sed id. Pretium vulputate sapien nec
                sagittis aliquam malesuada bibendum arcu. Auctor eu augue ut
                lectus arcu bibendum at varius vel.
              </p>
              <p className="mb-5">
                Mattis molestie a iaculis at erat pellentesque adipiscing
                commodo. Sit amet commodo nulla facilisi nullam vehicula ipsum
                a. Magna sit amet purus gravida quis blandit. Sed adipiscing
                diam donec adipiscing tristique. Sit amet porttitor eget dolor
                morbi non arcu risus.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div
                className="before:absolute before:-bottom-20
                before:right-40 before:z-[-1] before:content-sparkles"
              >
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
