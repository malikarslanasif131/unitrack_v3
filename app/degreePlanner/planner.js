import "./detailPlanner.css"

export function Planner() {

    return (
        <div className="degreePlanContainer">
            <div className="degreePlan">
                <div className="heading">
                    <p>Bachelor of Advanced Computing</p>
                    <a href="#">
                        <i className="material-icons">edit</i>
                    </a>
                </div>
                <SemesterPlan />
                <SemesterPlan />
                <SemesterPlan />
                <SemesterPlan />
            </div>
            <DegreeRequirements />
        </div>
    )
}

function DegreeRequirements() {
    var credits = credits;
    var totalCredits = totalCredits;
    // document.getElementsByTagName("PROGRESS")[0].setAttribute("value", credits / totalCredits * 100);
    // document.getElementById("degreePercentage").innerHTML = credits / totalCredits * 100 + "% planned";
    // document.getElementById("completedCredits").innerHTML = credits + "/" + totalCredits + "cp";

    return (
        <div className="degreeRequirements">
            <div className="degreeProgress">
                <p id="degreePercentage" onclick="updateProgressBar(12, 100)">0% planned</p>
                <p id="completedCredits">0/0cp</p>
                <br/>
            </div>
            <progress value="0" max="100"></progress>

            <div className="creditRequirements">
                <div className="degreeRequirement">
                    <p>Degree core</p>
                    <p>0/96</p>
                </div>
                <div className="degreeRequirement">
                    <p>Major 1</p>
                    <p>0/48</p>
                </div>
                <div className="degreeRequirement">
                    <p>Major 2</p>
                    <p>0/48</p>
                </div>
                <div className="degreeRequirement">
                    <p>Degree requirement</p>
                    <p>0/0</p>
                </div>
            </div>
        </div>

    )
}
            function updateProgressBar(credits, totalCredits) {
            }

export function SemesterPlan() {
    return (
        <div className="semesterPlan">
            <p id="year">2021</p>

            <div className="semesterRow">
                <p id="semester">Semester 2</p>
                <a href="#">
                    <i className="material-icons">add_box</i>
                </a>
            </div>

            <Unit />
        </div>
    )
}

export function Unit() {

    return (
        <div className="degreeUnit">
            <a href="#">
                <i className="material-icons">search</i>
            </a>
        </div>
    )

}
