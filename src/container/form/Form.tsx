import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import { testAction } from "../../store/formSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHook";
import { selectPosts } from './../../store/formSlice';

type Inputs = {
	example: string;
	exampleRequired: string;
	selectEx: string;
};

export const Form = () => {
	const { register, handleSubmit, watch, errors } = useForm<Inputs>();

	const dispatch = useAppDispatch();
  
  const posts = useAppSelector(selectPosts)

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		// dispatch(testAction);
		alert(JSON.stringify(data));
	}; // your form submit function which will invoke after successful validation

	console.log(watch("example")); // you can watch individual input by pass the name of the input
  console.log(posts)

	return (
		<>
			<div>
				{posts.map((item) => (
					<div className = 'form__post'>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
				))}
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Example</label>
				<input name="example" minLength={6} ref={register} required />
				<label>ExampleRequired</label>
				<input
					name="exampleRequired"
					required
					pattern="\d+"
					ref={register({ required: true, maxLength: 10 })}
				/>
				{errors.exampleRequired && <p>This field is required</p>}
				<select name="selectEx" ref={register}>
					<option value="one">One</option>
					<option value="two">Two</option>
				</select>
				<input type="submit" />
			</form>
		</>
	);
};
