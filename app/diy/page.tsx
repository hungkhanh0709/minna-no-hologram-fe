import { FaArrowUpRightDots, FaClock, FaPlay, FaWrench } from "react-icons/fa6"
import styles from "./diy.module.css"
import { Header } from "@/components/Header"
import Image from "next/image"

export default function DIYPage() {
  return (
    <div className={styles.page}>
      <Header activePage="diy" className={styles.header} />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroContainer}>
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
              <p className={styles.heroSubtitle}>
                Experience the future of payments: fast, secure, and tailored for the next generation's convenience and
                trust.
              </p>

              <div className={styles.projectMetrics}>
                <div className={styles.metric}>
                  <div className={styles.metricIcon}>
                    <FaClock size={20} />
                  </div>
                  <div className={styles.metricContent}>
                    <span className={styles.metricLabel}>PREP TIME</span>
                    <span className={styles.metricValue}>5 minutes</span>
                  </div>
                </div>

                <div className={styles.metric}>
                  <div className={styles.metricIcon}>
                    <FaWrench size={20} />
                  </div>
                  <div className={styles.metricContent}>
                    <span className={styles.metricLabel}>DIY TIME</span>
                    <span className={styles.metricValue}>15 minutes</span>
                  </div>
                </div>

                <div className={styles.metric}>
                  <div className={styles.metricIcon}>
                    <FaArrowUpRightDots size={20} />
                  </div>
                  <div className={styles.metricContent}>
                    <span className={styles.metricLabel}>LEVEL</span>
                    <span className={styles.metricValue}>Easy</span>
                  </div>
                </div>
              </div>
            </div>


            <div className={styles.heroImageContainer}>
              <div className={styles.finishedProductLabel}>
                <div className={styles.labelIcon}>
                  <Image width={65} height={65} alt='' src='/images/finish-product-icon.svg' />
                </div>
                <span>The Finished Product</span>
              </div>
              <img src="/placeholder.svg?height=400&width=400" alt="Hologram Pyramid" className={styles.heroImage} />
              <div className={styles.userLikes}>

                <div className={styles.likesText}>
                  <span>From Zero to <br />100K+ Users Liked</span>
                </div>
                <div className={styles.likesAvatar}>
                  <Image width={65} height={65} alt='' src='/images/love-it-icon.svg' />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Time Section */}
        <section className={styles.creativeTimeSection}>
          <div className={styles.creativeTimeImage}>
            <Image
              width={472}
              height={311}
              src="/images/creative-time.svg"
              alt="Creative Time Illustration"
              className={styles.creativeTimeImg}
            />
          </div>
        </section>

        {/* What You Need Section */}
        <section className={styles.whatYouNeedSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What you need</h2>
          </div>

          <div className={styles.materialsContainer}>
            <div className={styles.materialsImage}>
              <img src="/placeholder.svg?height=300&width=400" alt="DIY Materials" className={styles.materialsImg} />
            </div>

            <div className={styles.materialsList}>
              <div className={styles.materialItem}>
                <div className={styles.materialNumber}>1</div>
                <div className={styles.materialText}>White flowers</div>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialNumber}>2</div>
                <div className={styles.materialText}>Coloring for cut flowers</div>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialNumber}>3</div>
                <div className={styles.materialText}>Drink cup</div>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialNumber}>4</div>
                <div className={styles.materialText}>Disposable gloves</div>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialNumber}>5</div>
                <div className={styles.materialText}>Scissors</div>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialNumber}>6</div>
                <div className={styles.materialText}>4 small ziplock bags</div>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialNumber}>7</div>
                <div className={styles.materialText}>Newspaper (for use on a desk)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tutorial Section */}
        <section className={styles.tutorialSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Tutorial</h2>
          </div>

          <div className={styles.videoContainer}>
            <img src="/placeholder.svg?height=400&width=800" alt="Tutorial Video" className={styles.tutorialVideo} />
            <button className={styles.playButton}>
              <FaPlay size={32} />
            </button>
          </div>
        </section>

        {/* Step-by-step Section */}
        <section className={styles.stepByStepSectionContainer}>
          <div className={styles.stepByStepSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Step-by-step</h2>
            </div>

            <div className={styles.stepsContainer}>
              <div className={styles.stepsList}>
                <div className={styles.stepItem}>
                  <div className={styles.stepImage}>
                    <img src="/placeholder.svg?height=300&width=300" alt="Step 1" className={styles.stepImg} />
                  </div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepBadge}>STEP 1</div>
                    <h3 className={styles.stepTitle}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </h3>
                    <p className={styles.stepDescription}>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat."
                    </p>
                  </div>
                </div>

                <div className={styles.stepItem}>
                  <div className={styles.stepImage}>
                    <img src="/placeholder.svg?height=200&width=300" alt="Step 2" className={styles.stepImg} />
                  </div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepBadge}>STEP 2</div>
                    <h3 className={styles.stepTitle}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </h3>
                    <p className={styles.stepDescription}>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat."
                    </p>
                  </div>
                </div>

                <div className={styles.stepItem}>
                  <div className={styles.stepImage}>
                    <img src="/placeholder.svg?height=200&width=300" alt="Step 3" className={styles.stepImg} />
                  </div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepBadge}>STEP 3</div>
                    <h3 className={styles.stepTitle}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </h3>
                    <p className={styles.stepDescription}>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related DIY Videos Section */}
        <section className={styles.relatedVideosSection}>
          <div className={styles.container}>
            <h2 className={styles.relatedVideosTitle}>Related DIY videos</h2>

            <div className={styles.relatedVideosGrid}>
              <div className={styles.relatedVideoCard}>
                <div className={styles.relatedVideoImage}>
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Video title 1"
                    className={styles.relatedVideoImg}
                  />
                </div>
                <div className={styles.relatedVideoContent}>
                  <h3 className={styles.relatedVideoTitle}>Video title 1</h3>
                  <p className={styles.relatedVideoDescription}>
                    Body text for whatever you'd like to add more to the subheading.
                  </p>
                </div>
              </div>

              <div className={styles.relatedVideoCard}>
                <div className={styles.relatedVideoImage}>
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Video title 2"
                    className={styles.relatedVideoImg}
                  />
                </div>
                <div className={styles.relatedVideoContent}>
                  <h3 className={styles.relatedVideoTitle}>Video title 2</h3>
                  <p className={styles.relatedVideoDescription}>
                    Body text for whatever you'd like to expand on the main point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
