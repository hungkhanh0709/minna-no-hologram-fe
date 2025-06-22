"use client";

import { useEffect, useState } from "react";
import styles from "./video-detail.module.scss";
import { API_URLS } from "@/lib/api";
import { Header } from "@/components/Header";
import { VideoCard } from "@/components/VideoCard";
import Image from "next/image";

export default function VideoDetailPage({ params }: { params: { id: string } }) {
  const [video, setVideo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await fetch(API_URLS.VIDEO_DETAIL(params.id));
        if (!res.ok) throw new Error("Failed to fetch video detail");
        const data = await res.json();
        setVideo(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [params.id]);

  if (loading) return <p>Loading...</p>;
  if (!video) return <p>Video not found</p>;

  return (
    <div className={styles.page}>
      <Header activePage="" />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Video */}
          <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
              <iframe
                src={video.videoUrl}
                title={video.title}
                className={styles.videoIframe}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Info */}
          <div className={styles.videoInfo}>
            <h1 className={styles.videoTitle}>{video.title}</h1>

            {/* Tags */}
            <div className={styles.tags}>
              {video.tags.map((tag: any) => (
                <span key={tag.id} className={styles.tag}>
                  {tag.name}
                </span>
              ))}
            </div>

            {/* QA Section */}

            <div className={styles.commentsList}>
              {video.qaContent.map((qa: any, index: number) => (
                <>
                  <div key={qa.id} className={styles.commentItem}>
                    {/* <div className={styles.commentAvatar}> */}

                    <Image src="/images/hippo-character.svg" width={125} height={120} alt='' />
                    <h4 className={styles.commentContent}>{qa.question}</h4>
                    {/* </div> */}
                  </div>

                  <div key={qa.id} className={styles.commentItem}>
                    {/* <div className={styles.commentAvatar}> */}
                    <Image src="/images/rabbit-character.svg" width={125} height={120} alt='' />
                    <p className={styles.commentContent}>{qa.answer}</p>
                    {/* </div> */}

                  </div>
                </>
              ))}
            </div>


            {/* Related Videos */}
            {video.relatedVideos && video.relatedVideos.length > 0 && (
              <div className={styles.relatedSection}>
                <h2 className={styles.sectionHeading}>Related Videos</h2>
                <div className={styles.relatedGrid}>
                  {video.relatedVideos.map((v: any) => (

                    <VideoCard
                      slug={v.slug}
                      key={v.id}
                      id={v.id}
                      title={v.title}
                      description={v.category.name}
                      thumbnail={v.thumbnail}
                      tags={v.tags.map((t: any) => t.name)}
                      likes={v.likeCount}
                      initialLiked={false}
                    />

                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
