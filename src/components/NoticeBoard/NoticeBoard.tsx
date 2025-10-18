import { Calendar } from 'lucide-react';
import styles from './NoticeBoard.module.css';

const notices = [

  {
    title: 'New Batch Starting for Inter MPC',
    date: '20 Oct 2025',
    content: 'Admissions open for Inter MPC morning batch. Limited seats available. Early bird discount applicable.',
    tags: ['Pinned', 'New', 'Admission'],
  },
  {
    title: 'Special Batch for 10th Board Exams 2026',
    date: '18 Oct 2025',
    content: 'Intensive coaching program for Class 10th board exams starting from November 1st. Focus on score improvement and exam strategies.',
    tags: ['Pinned', 'New', 'Announcement'],
  },
];

const getTagClassName = (tag: string) => {
  const tagLower = tag.toLowerCase();
  if (tagLower === 'pinned') return styles.tagPinned;
  if (tagLower === 'new') return styles.tagNew;
  if (tagLower === 'admission') return styles.tagAdmission;
  if (tagLower === 'announcement') return styles.tagAnnouncement;
  if (tagLower === 'urgent') return styles.tagUrgent;
  if (tagLower === 'deadline') return styles.tagDeadline;
  return '';
};

const NoticeBoard = () => {
  return (
    <section className={styles.noticeBoard}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Notice Board</h2>
          <div className={styles.subheading}>Latest Updates & Announcements</div>
          <p className={styles.description}>
            Stay informed about important dates, events, and announcements from Impact Academy.
          </p>
        </div>

        <div className={styles.noticeList}>
          {notices.map((notice, index) => (
            <div key={index} className={styles.notice}>
              <div className={styles.noticeHeader}>
                <h3 className={styles.noticeTitle}>{notice.title}</h3>
                <div className={styles.noticeDate}>
                  <Calendar className={styles.dateIcon} size={18} />
                  <span>{notice.date}</span>
                </div>
              </div>
              <div className={styles.noticeTags}>
                {notice.tags.map((tag, i) => (
                  <span key={i} className={`${styles.tag} ${getTagClassName(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className={styles.noticeContent}>{notice.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
