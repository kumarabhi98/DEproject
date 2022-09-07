
let action = document.querySelector('.actionarea');
function changeoption(option) {

    switch (option) {
        case 'option1':
            document.getElementById('stimulator').style.display = "none";
            document.getElementById('info').style.display = "block";
            document.getElementById('info').innerHTML = '<h1> Problem statement</h1><p>The traffic department is trying out a new system of traffic lights based on the usual European model. We have to design a synchronous digital circuit, a Moore Machine, which operates this new type of traffic light at a simple road crossing.</p><img src="problem.png" alt="" srcset=""><p>There are six light operators. The Red, Amber, and Green lights in the North-South direction will be designated as R1, A1, G1. Similarly, the lights in the East-West direction will be called R2, A2, and G2. When the digital signals are in the Logic-1 state they turn their respective lights on, otherwise the lights are off. A digital clock signal will be supplied and at each clock pulse the lights should change according the schedule given above. There are two types of road crossing: safe ones that require one sequence, and dangerous ones that require another (delayed green) sequence. One digital input signal called SAFE will indicate whether the road crossing is safe. Thus, we have a one-input, six-output synchronous system to design.</p>';

            document.getElementById('option3').style.backgroundColor = "rgb(4, 4, 61)";
            document.getElementById('option2').style.backgroundColor = "rgb(4, 4, 61)";
            document.getElementById('option1').style.backgroundColor = "rgb(7, 7, 141)";
            document.getElementById('option4').style.backgroundColor = "rgb(4, 4, 61)";

            break;
        case 'option2':
            document.getElementById('stimulator').style.display = "none";
            document.getElementById('info').style.display = "block";
            document.getElementById('info').innerHTML = ` <h1>Solution to problem</h1>
            <h2>STEP 1: Understand the problem and decide how many states we need.</h2>
            <img src="state.png" alt="" srcset="">
            <p>Looking at the transition table, we see that there are six states in the first column (dangerous
                intersection) and
                four states in the second. However we do not need ten states because all four states in the second
                column (the
                same six outputs) are included in the six states of the first column. We need only six states.</p>
            <h2>STEP 2: Construct the state transition diagram (ignore outputs)</h2>
            <img src="statedia.png" alt="" srcset="">
            <h2>STEP 3: Select the type and number of flip-flops for the circuit.</h2>
            <p>Since the number of states is equal to six, the minimum number of flip-flops, which can support six
                states, is
                three. The maximum number of flip-flops one may use is six (one flip-flop per state). For this design
                example
                we will use three D-type flip-flops. There will be two unused states.</p>
            <h2>STEP 4: Assign state numbers to flip-flop outputs and construct the transition table.</h2>
            <p>If we want to try to find a simpler overall circuit, we may try different flip-flop assignments for the
                states. One
                idea is to minimise the output circuitry. We could, for example, make R1=Q1 and R2=Q2, if these simple
                assignments will give us a correct complete state assignment. The third output, Q3 has to be assigned
                such that
                all used states are distinct. One possible set of assignments are shown below:</p>
            <img src="stateassign.png" alt="" srcset="">
            <img src="kmap.png" alt="" srcset="">
            <p>The output circuits require only two-input NAND gates. But of course, we have to redesign the input
                circuitry
                with the new flip-flop assignments.</p>
            <img src="table.png" alt="" srcset="">
            <div id="imagetable">
                <img src="d1.png" alt="" srcset=""><img src="d2.png" alt="" srcset=""><img src="d3.png" alt=""
                    srcset="">
            </div>
            <h3>Final Equations</h3>
            <div id="flex">
                <div>
                    D1 = S'•Q2' + Q3'
                </div>
                <div>
                    D2 = S'•Q1' + Q3
                </div>
                <div>
                    D3 = Q2' + Q1•Q3
                </div>
                <div>
                    R1 = Q1
                </div>
                <div>
                    A1 = Q1'•Q3'
                </div>
                <div>
                    G1 = Q1'•Q3
                </div>
                <div>
                    R2 = Q2
                </div>
                <div>
                    A2 = Q2'•Q3
                </div>
                <div>
                    G2 = Q2'•Q3'
                </div>
            </div>
            <P>
            </P>`;

            document.getElementById('option3').style.backgroundColor = "rgb(4, 4, 61)";
            document.getElementById('option2').style.backgroundColor = "rgb(7, 7, 141)";
            document.getElementById('option1').style.backgroundColor = "rgb(4, 4, 61)";
            document.getElementById('option4').style.backgroundColor = "rgb(4, 4, 61)";
            break;
        case 'option3': document.getElementById('stimulator').style.display = "block";
            document.getElementById('info').style.display = "none";
            document.getElementById('option3').style.backgroundColor = "rgb(7, 7, 141)";
            document.getElementById('option2').style.backgroundColor = "rgb(4, 4, 61)";
            document.getElementById('option1').style.backgroundColor = "rgb(4, 4, 61)";
            document.getElementById('option4').style.backgroundColor = "rgb(4, 4, 61)";
            break;
        case 'option4':
            document.getElementById('stimulator').style.display = "none";
            document.getElementById('info').style.display = "block";
            document.getElementById('info').innerHTML = ` <h1>ABOUT THE STIMULATION</h1>
                <p id="steps">
                    1. <span>off</span>  is for 'S' variable. Initially 's' is 1. To make S=0, CLICK ON  <span>off</span>  and to make s=1, CLICK ON  <span>On</span>. <br><br>
                    2. <span id="c">Clock</span> is used to generate the clock pulses. CLICK on it and the circuit will respond to the clock pulse. <br><br>
                    3. Slider present at bottom left corner is used for changing the time period of the clock pulse in running state. <br><br>
                    4. See the changed value of variables after Clicking the clock in the table below. <br><br>
                    5. Click on this for running the circuit<i class="fas fa-power-off" id="v"></i>   
                </p>`;

            document.getElementById('option3').style.backgroundColor = "rgb(4, 4, 61)";
            document.getElementById('option2').style.backgroundColor = "rgb(4, 4, 61)";
            document.getElementById('option1').style.backgroundColor = "rgb(4, 4, 61)";
            document.getElementById('option4').style.backgroundColor = "rgb(7, 7, 141)";
            break;
    }
}