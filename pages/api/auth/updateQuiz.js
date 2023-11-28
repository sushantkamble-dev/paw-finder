//import { updateQuiz } from "@/lib/users/update";

export default async (req, res) => {
    try {
      const { quiz, id } = req.body;
      //const { results, err } = await updateQuiz(quiz, id);
      const results = req.body;
      console.log(quiz);
      console.log(id);
      if (err) throw new Error(err);
      res.setHeader("Content-Type", "application/json");
      return res.status(200).json({data: results});
    } catch (error) {
      return res.status(500).json({ error: error.message });
  
    }
  
  };