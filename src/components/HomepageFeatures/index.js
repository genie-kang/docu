import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'SentinelOne',
    Svg: require('@site/static/img/s1.svg').default,
    description: (
      <>
        SentinelOne is an AI-powered EDR(Endpoint Detection and Response) solution that protects endpoints through real-time threat detection and automated response.
      </>
    ),
  },
  {
    title: 'Stellar Cyber',
    Svg: require('@site/static/img/SC.svg').default,
    description: (
      <>
        Stellar Cyber is an Open XDR(Extended Detection and Response) platform that integrates with various security solutions to aggregate and analyze threat data.
      </>
    ),
  },
  // {
  //   title: 'Aurora Protect',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Aurora Protect is an integrated EPP(Endpoint Protection Platform) solution that provides malware prevention and threat behavior detection.
  //     </>
  //   ),
  // },
  {
    title: 'Aurora Protect',
    Img: '/img/Aurora-logo.png', // PNG 경로
    description: (
      <>
        Aurora Protect is an integrated EPP(Endpoint Protection Platform) solution that provides malware prevention and threat behavior detection.
      </>
    ),
  },
];

// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

function Feature({Svg, Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : Img ? (
          <img src={Img} className={styles.featureImg} alt={title} />
        ) : null}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
