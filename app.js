const app = new Vue({
	el: "#app",
	data() {
		return {
			titlePage: "Courses Track",
			courses: [],
			title: "",
			time: 0,
		};
	},
	computed: {
		totalTime() {
			if (this.courses.length == 0) {
				return `Usted no ha tomado cursos`;
			}
			total = 0;
			this.courses.forEach(course => {
				total += course.time;
			});
			return `Usted a invertido: ${total}`;
		},
		code() {
			if (!this.title) {
				return `-`;
			} else if (this.title.length < 4) {
				newCode = this.title;
			}
			return `${newCode}-${this.courses.length}`;
		},
	},

	methods: {
		addCourse() {
			NewCourse = { title: this.title, time: parseInt(this.time), code: this.code };
			this.courses.push(NewCourse);
			this.time = 0;
			this.title = "";
			this.code = "";
		},
	},
});
