# Frontend

In the project directory, you can run:
## Available Scripts
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## React packages/modules

* JavaScript library for building user interfaces : https://reactjs.org/ (React)
* Communication with the backend API's : fetch from react
* For styling : quicksand styles (font --> https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap)
## Installation 

In frontend directory:

$ npm install (If you haven't already done the quick installation)

$ npm run start

## UI Contents

### `Navigation`
You can navigate the web app using the Navbar on the top to choose between:
* Home
* Payment
* Analysis
* ChargesBy
* PassesCost
* PassesPerStation
* TrackVehicle
### `Payment`
In the Payment page fill in the data:
* from
* to

and choose from the available operators in:
* operator 1
* operator 2

and press proceed.

This will lead you to the Confirm Payment page where you can view how much is owed between the operators in that time period and decide between:
* Confirm payment        (to confirm the payment and send the appropriate amount)
* Make A New Payment     (to discard this payment and make a new one)
* Return To Home         (to discard this payment and return to the Home page)

### `Analysis`
In the Analysis page fill in the data:
* from
* to

and choose from the available operators in:
* operator 1
* operator 2

and press proceed.

This will lead you to the Short Analysis page where you can view the amount of passes made through operator 1's stations using operator 2's epass in that time period.
Then you can choose whether you want to:
* View Long Analysis    (get more data on the current analysis)
* Request new Analysis  (discard current analysis and view a different one)

In the Long Analysis you are presented with the previous information and a table that contains every pass made in that time period with some extra data including:
1. StationID         (Which station the vehicle passed through)
2. PassTimeStamp     (The exact time of the pass)
3. VehicleID         (Vehicle's License plate)
4. Charge            (the amount charged for the pass)

then you can decide between:
* View Short Analysis
* Request new Analysis

### `ChargesBy`
In the ChargesBy page fill in the data:
* from
* to

and choose from the available operators in:
* operator

and press proceed.
This will lead you to the ChargesByResults page which displays a table with the following data about that time period:
1. Charged Operator  (Operator whose epass was used for the passes)
2. Passes            (Total amount of passes with Charged Operator's epass)
3. Sum               (Total amount owed from Charged Operator)

then you can decide between:
* New Charges By
* Home

### `PassesCost`
In the PassesCost page fill in the data:
* from
* to

and choose from the available operators in:
* operator 1
* operator 2

and press proceed.

This will lead you to the Passes Cost Results page which diplays the total amount of money operator 1 charged to operator 2 and for how many passes the charge is during that time period.

then you can decide between:
* New PassesCost
* Home

### `PassesPerStation`
In the PassesPerStation page fill in the data:
* from
* to

and choose from the available stations in:
* Station

and press proceed.

This will lead you to the Passes Per Station Results page which will show the total amount of passes made in that station during that time period and who operates said station and also display a table with each pass and some data on each pass including:
1. PassTimeStamp     (The exact time of the pass)
2. VehicleID         (Vehicle's License plate)
3. TagProvider       (Operator whose epass was used)
4. PassType          (Home = epass is issued by the operator that owns the station | Visitor = epass is issued by a different operator)
5. PassCharge        (Amount charged for the pass)
then you can decide between:
6. New PassesPerStation
7. Home

### `TrackVehicle`
In the TrackVehicle page fill in the data:
* from
* to
* Vehicle License Plate

and press proceed.

This will lead you to the Track Vehicle Results page which will show how many passes the vehicle had in that time frame and how much was totally charged for them.

Also a table will be made that displays this information about said vehicle's passes:
1. Operator              
2. PassesCount           (How many passes were made through each operator's stations)
3. Total Amount Charged  (How much each operator has totally charged the vehicle)

## **DISCLAIMER**
For best results make sure that the ***to*** date is always at least one day after the ***from*** date and that in cases where 2 operators are selected that they are 2 *different* operators