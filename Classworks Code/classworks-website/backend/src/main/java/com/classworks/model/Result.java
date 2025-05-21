package com.classworks.model;

public class Result {
    private String studentId;
    private String studentName;
    private String course;
    private String semester;
    private double marksObtained;
    private double totalMarks;
    private String grade;

    public Result() {
    }

    public Result(String studentId, String studentName, String course, String semester, double marksObtained, double totalMarks, String grade) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.course = course;
        this.semester = semester;
        this.marksObtained = marksObtained;
        this.totalMarks = totalMarks;
        this.grade = grade;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }

    public double getMarksObtained() {
        return marksObtained;
    }

    public void setMarksObtained(double marksObtained) {
        this.marksObtained = marksObtained;
    }

    public double getTotalMarks() {
        return totalMarks;
    }

    public void setTotalMarks(double totalMarks) {
        this.totalMarks = totalMarks;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }
}