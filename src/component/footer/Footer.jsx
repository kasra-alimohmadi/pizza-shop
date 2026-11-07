import styles from "./Footer.module.css";

function SocialLinks({ links = [], compact = false }) {
	return (
		<div className={`${styles.socialLinks} ${compact ? styles.compactSocial : ""}`}>
			{links.map((link) => (
				<a href={link.href} aria-label={link.label} key={link.icon}>
					<svg aria-hidden="true"><use href={`/images/icons/sprite.svg#${link.icon}`} /></svg>
				</a>
			))}
		</div>
	);
}

function Footer({ data }) {
	function handleSubmit(event) {
		event.preventDefault();
	}

	const quickLinks = data?.quickLinks || [];
	const branches = data?.branches || [];
	const socialLinks = data?.socialLinks || [];

	return (
		<footer className={styles.footer}>
			<div className={styles.compactFooter}>
				<div>
					<h2>دسترسی آسان</h2>
					{quickLinks.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}
					<SocialLinks links={socialLinks} compact />
				</div>
				<div>
					<h2>شعبه‌های ترخینه</h2>
					{branches.slice(0, 3).map((branch) => <a href="#branches" key={branch}>{branch}</a>)}
				</div>
			</div>
			<div className={styles.mainFooter}>
				<div className={styles.footerContent}>
					<section className={styles.linksColumn}>
						<h2>دسترسی آسان</h2>
						{quickLinks.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}
						<SocialLinks links={socialLinks} />
					</section>
					<section className={styles.branchesColumn}>
						<h2>شعبه‌های ترخینه</h2>
						{branches.map((branch) => <a href="#branches" key={branch}>{branch}</a>)}
					</section>
					<section className={styles.messageColumn}>
						<h2>پیام به ترخینه</h2>
						<form className={styles.messageForm} onSubmit={handleSubmit}>
							<div className={styles.inputFields}>
								<input aria-label="نام و نام خانوادگی" placeholder="نام و نام خانوادگی" />
								<input aria-label="شماره تماس" placeholder="شماره تماس" inputMode="tel" />
								<input aria-label="آدرس ایمیل (اختیاری)" placeholder="آدرس ایمیل (اختیاری)" type="email" />
							</div>
							<div className={styles.messageField}>
								<textarea aria-label="پیام شما" placeholder="پیام شما" />
								<button type="submit">ارسال پیام</button>
							</div>
						</form>
					</section>
				</div>
			</div>
		</footer>
	);
}

export default Footer;