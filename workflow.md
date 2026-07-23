# WORKFLOW

## Overview

For this assignment, I implemented the same React Settings Form twice using two different AI prompting approaches.

### Round One

In the first round, I used a very simple prompt:

> "Create a React settings form."

The generated result was a basic form with Name, Email, and Theme fields. It allowed the user to submit the form, but it did not include input validation, accessibility labels, password support, or proper error handling. The code worked, but it required more manual review to identify missing features.

### Round Two

In the second round, I used a detailed prompt with clear requirements. I specified validation rules, accessibility labels, password field, success message, and verification requirements.

The generated form was much better. It included validation, error messages, labels for accessibility, and a cleaner structure. It required fewer manual improvements and was easier to understand.

## Comparison

The second prompt produced higher-quality code because it included detailed requirements instead of a vague request. Although writing the prompt took a little longer, it reduced the overall review effort and improved the final result.

## AI Mistake

One issue I noticed was that the submit button was only disabled when fields were empty. It did not consider invalid email format or a password shorter than eight characters. I identified this limitation during review.

## What I Learned

This exercise showed me that effective AI prompting is an important development skill. Providing clear requirements, constraints, and verification instructions produces more reliable and maintainable code than using a vague prompt.