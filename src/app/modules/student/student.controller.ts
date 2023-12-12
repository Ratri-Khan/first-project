import { Request, Response } from "express";
// import { Student } from "./student.interface";
import { StudentServices } from "./student.service";

const createStudent = async(req: Request, res:Response)=>
{
try{
    const {student : studentData} = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
        success:true,
        message:'Student is crated successfully',
        data:result
    });
}
catch(err){
    console.log(err);
}
}
const getAllStudents = async(req:Request, res:Response)=>{
    try{
        const result = await StudentServices.getAllStudentsFromDB();

        res.status(200).json({
            success:true,
            message:'Students is crated successfully',
            data:result,
        });
    }
    catch(err){
        console.log(err);
    }

}
export const StudentControllers = {
    createStudent,
    getAllStudents
}